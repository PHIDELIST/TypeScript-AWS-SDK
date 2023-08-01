import { TranslateClient,TranslateTextCommand,TranslateTextCommandInput,TranslateTextCommandOutput } from "@aws-sdk/client-translate";
const client: TranslateClient = new TranslateClient({region:"us-east-1"});
const translate = async(sourceLang:string, targetLang:string,text:string) =>{
    const params: TranslateTextCommandInput= {
        SourceLanguageCode: sourceLang,
        TargetLanguageCode: targetLang,
        Text: text
    };
    const command = new TranslateTextCommand(params)
    const data: TranslateTextCommandOutput = await client.send(command);
    console.log(data);
};
export default translate;