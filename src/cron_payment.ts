import DB from "./utils/db";

export default async function payments(){
    const db = new DB()
    const schedules = await db.getPendingSchedules()
    const streams = await db.getPendingStreams()
    
}