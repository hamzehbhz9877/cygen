import {instant} from "@/services/httpservice";
import {queryOptions} from "@tanstack/react-query";
import {redirectStatus} from "@/utils/notFound-server";
import axios from "axios";



export const GetDynamicSections = async (params: any) =>instant.get(`DynamicSection/GetDynamicSections`,{params:{...params}})


