import {instant} from "@/services/httpservice";

export const GetDeliveryTimes = () =>
    instant.get(`OrderDeliveryTime/GetDeliveryTimes`)