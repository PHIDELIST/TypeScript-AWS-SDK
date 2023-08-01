import { readFile, readFileSync } from "fs";
import {TranslateClient, TranslateTextCommand,TranslateTextCommandInput,TranslateTextCommandOutput} from '@aws-sdk/client-translate';

const json = readFileSync("translate_input.json", "utf-8");
const data =JSON.parse(json); //parse Json in the file into js object

const client: TranslateClient = new TranslateClient({region:"us-east-1"});

const translate = async (params:TranslateTextCommandInput) => {
    const command = new TranslateTextCommand(params);
    const data: TranslateTextCommandOutput = await client.send(command);
    console.log(data.TranslatedText);
    
};

data.Input.forEach((value : { SourceLanguageCode :string; TargetLanguageCode:string;Text:string}) =>{
    const params:TranslateTextCommandInput = {
        SourceLanguageCode: value.SourceLanguageCode,
        TargetLanguageCode: value.TargetLanguageCode,
        Text: value.Text,
    };

    translate(params)
})


