import axios from "axios"
import { checkurl } from "./Source/Tools/checkfile";
import { urls } from "./Source/Tools/Urls";
import { IRequest } from "./Source/Tools/Urls";


const checkurls = async (requests: IRequest[]) => {
    await Promise.all(
        (requests.map(async (request): Promise<void> => {
         await checkurl(request.url, request.config)
        }))
    );
};
checkurls(urls);




