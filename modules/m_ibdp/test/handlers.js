export const generateQuestionCount = (testType, questions) => {
    var count = 0;
    if(testType == "mcq") {
        questions.forEach(question => {
            if(question.data.type == "simple-mcq"){
                count = count + 1;
            } else if (question.data.type == "multipart-mcq") {
                count = count + question.data.parts.length;
            }
        });
    }

    return count
}

export const generateIndexMap = (testType, questions) => {
    var map = []
    var count = 0;
    if(testType == "mcq") {
        questions.forEach(question => {
            if(question.data.type == "simple-mcq"){
                map.push(count)
                count++
            } else if (question.data.type == "multipart-mcq") {
                question.data.parts.forEach(
                    part => {
                        map.push(count)
                    }
                )
                count++
            }
        });
    }

    return map
}

export const generateSubTopicCount = (questions) => {
    const subTopics = new Set()
    questions.forEach(
        question => {
            subTopics.add(question.data._meta.subTopic)
        }
    )

    return subTopics.size
}

export const generatePropoties = (testType, questions) => {
    return {
        questionCount: generateQuestionCount(testType, questions),
        indexMap: generateIndexMap(testType, questions),
        subTopicCount: generateSubTopicCount(questions)
    }
}