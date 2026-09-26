// node update script

import fs from 'fs/promises';

async function logDatabase() {
    try {
        // get the invites data (such a great variable name i know)
        const databaseData = await fs.readFile('database.json', 'utf8')
        const logData = await fs.readFile('log.json', 'utf8')

        const db = JSON.parse(logData);

        let newObject = {
            "timestamp": new Date().toISOString(),
            "data": JSON.parse(databaseData)
        }

        db.push(newObject)

        await fs.writeFile('log.json', JSON.stringify(db, null, 2));
        console.log("(4/4) i successfully did my job now i can rest yaya")
    } catch (error) {
        console.error("very bad error, me (Mr update bot) could not log the servers. heres why: ", error)
        process.exit(1)
    }
}

logDatabase();