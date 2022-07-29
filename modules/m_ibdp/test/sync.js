import { authClient } from '@/lib/fauna';
import { query as q } from 'faunadb';
import {debounce} from 'throttle-debounce';

export const throttleSync = debounce(1000, false, async (secret, testRef, data) => {
    console.log("Sending Some 💗 To The Database")

    Object.keys(data).map((key, index) => {
      if(key.startsWith('_')){
        delete data[key]
      }
    })

    try {
      const query = await authClient(secret).query(q.Update(q.Ref(q.Collection("m_ibdp_user_responses"), testRef), {
        data: data
      }))
    } catch (e) {
      console.log(e)
    }
  });