import {instant} from "@/services/httpservice";

export const SubscribeToNewsletter = (data) => instant.post('/Newsletter/SubscribeToNewsletter',data)