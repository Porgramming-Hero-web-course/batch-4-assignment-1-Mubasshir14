{
    // 
    function countWordOccurrences(sentence: string, word: string): number {
        const convertSentenceToWord = sentence.toLocaleLowerCase().split(/\W/);
        return convertSentenceToWord.filter(singleWord => singleWord === word.toLocaleLowerCase()).length;
    }

    // const result = countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    // console.log(result);

    // 
}