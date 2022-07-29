import {useState, useEffect, useContext, createContext} from "react";
import { useStopwatch } from 'react-timer-hook';

import {useAuth} from "@/lib/auth";
import {authClient} from "@/lib/fauna";

import {throttleSync} from '@/modules/m_ibdp/test/sync'
import {generatePropoties} from '@/modules/m_ibdp/test/handlers'

import {query as q} from 'faunadb';

const testContext = createContext();

export const TestProvider = ({testRef, children}) => {
  const test = useTestProvider(testRef);
  return <testContext.Provider value={test}>{children}</testContext.Provider>;
}

export const useTest = () => {
  return useContext(testContext);
};

const useTestProvider = (testRef) => {
  const [testData,
    setTestData] = useState()
  const [questions,
    setQuestions] = useState()
  const [response,
    setResponse] = useState()

  const [loading,
    setLoading] = useState(true)
  const [saving,
    setSaving] = useState(false)

  const [properties,
    setProperties] = useState()
  const stopwatch = useStopwatch({ autoStart: false })

  const auth = useAuth()

  useEffect(async() => {
    if (!auth.loading && testRef) {
      try {

        const getTestData = await authClient(auth.instance.secret).query(q.Get(q.Ref(q.Collection("m_ibdp_user_tests"), testRef)))
        setTestData(getTestData)

        const getQuestions = await authClient(auth.instance.secret).query(q.Call("m_ibdp_FetchQuestions", getTestData.data.questions))
        setQuestions(getQuestions)

        setProperties(generatePropoties(getTestData.data.type, getQuestions))

        var responseStream
        const startResponseStream = () => {
          responseStream = authClient(auth.instance.secret)
            .stream
            .document(q.Ref(q.Collection("m_ibdp_user_responses"), testRef))
            .on('snapshot', snapshot => {
              if (!snapshot.data.answers
                ?.length) {
                snapshot.data.answers = new Array(getQuestions.length).fill(false)
              }
              setResponse(JSON.stringify(snapshot.data))
            })
            .on('version', version => {
              setResponse(JSON.stringify(version.document.data));
              console.log("Got Some 💗 From The Database")
            })
            .on('error', e => {
              responseStream.close()
              setTimeout(responseStream, 2000)
              console.log(e)
            })
            .start()
        }

        startResponseStream()

      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
  }, [auth]);

  async function syncDatabase() {
    if (!auth.loading && !loading && response) {
      setSaving(true)
      await throttleSync(auth.instance.secret, testRef, JSON.parse(response))
      setSaving(false)
    }
  }

  useEffect(() => {
    syncDatabase()
    console.log(response)
  }, [response])

  const startTest = (method) => {
    if (method == "digital" || method == "omr") {
      updateResponse({method: method, status: 'started'})
      stopwatch.start()
    }
    
  }


  const updateResponse = (data) => {
    const newRes = JSON.parse(response)
    const jsonRes = JSON.stringify({...newRes, ...data})
    if (jsonRes != response) {
      setResponse(jsonRes)
    }
  }


  return {
    testData,
    loading,
    saving,
    questions,
    response,
    properties,
    stopwatch,
    startTest
  }
}
