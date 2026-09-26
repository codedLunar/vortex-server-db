// node update script

import fs from 'fs/promises';

async function updateStats() {
    try {
        // get the invites data (such a great variable name i know)
        const databaseData = await fs.readFile('database.json', 'utf8')
        let db = JSON.parse(databaseData)

        console.log(`(1/4) i read files successfully`)

        // loop through each db entry (new) and update the old one

        for (let i = 0; i < db.length; i++) {
            let invite = db[i].code;

            // so basically now we update it
            try {

                // im pretty sure v9 is the latest, if not open a issue
                let resp = await fetch(`https://discord.com/api/v9/invites/${invite}?with_counts=true`)

                if (resp.ok) {

                    console.log(`(2/4) i fetched the data successfully :D`)

                    // the new data
                    let data = await resp.json()

                    // time to update
                    // holy cow i have way too many comments i need to stop

                    db[i] = {
                        code: invite,
                        name: data.guild.name,
                        description: data.guild.description,
                        ownerName: db[i].ownerName,
                        memberCount: data.approximate_member_count,
                        icon: data.guild.icon ? `https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png?size=256` : null
                    }

                    console.log(`(3/4) ok i updated the json now what? oh writing the file after`)
                }
            } catch (error) {
                console.error(`bad error, i could not process or fetch the invite. here is why: ${error}`)
            }

            // wait because im deathly scared of rate limits (aka i error)
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        await fs.writeFile('database.json', JSON.stringify(db, null, 2));
        console.log("(4/4) i successfully did my job now i can rest yaya")
    } catch (error) {
        console.error("very bad error, me (Mr update bot) could not update the servers. heres why: ", error)
        process.exit(1)
    }
}

updateStats();
