import {TranslateClient, TranslateTextCommand , TranslateTextCommandInput,TranslateTextCommandOutput} from "@aws-sdk/client-translate";
import PromptSync from "prompt-sync";
const prompter = PromptSync();
import translate from './AmazonTranslate';

//get user inout

const text: string = prompter("Enter text you to translate: ");
const sourceLang :string = prompter("Enter two letter code for source language: ");
const targetLang :string = prompter("Enter two letter code for source language: ");

const clinet: TranslateClient = new TranslateClient({region:"us-east-1"});

translate(sourceLang,targetLang,text);