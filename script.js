async function sort_members() {
    // this function assumes the groups have already been created
    const serversContainer = document.querySelector(".servers-container")
    const servers = Array.from(serversContainer.children);

    servers.sort((a, b) => {
        const valA = parseFloat(a.querySelector(".grp-card-bottom").querySelector(".grp-card-meta").querySelector(".grp-card-members").textContent);
        const valB = parseFloat(b.querySelector(".grp-card-bottom").querySelector(".grp-card-meta").querySelector(".grp-card-members").textContent);
        return valA - valB;
    });

    servers.forEach((server) => {
        serversContainer.prepend(server)
    });

    [... document.querySelector(".servers-container-loading").children].forEach((loadingserver) => {
        loadingserver.remove();
    })

    document.querySelector("html").style.overflow = 'auto'
    document.querySelector("body").style.overflow = 'auto'
}

async function sort_members_least() {
    // this function assumes the groups have already been created
    const serversContainer = document.querySelector(".servers-container")
    const servers = Array.from(serversContainer.children);

    servers.sort((a, b) => {
        const valA = parseFloat(a.querySelector(".grp-card-bottom").querySelector(".grp-card-meta").querySelector(".grp-card-members").textContent);
        const valB = parseFloat(b.querySelector(".grp-card-bottom").querySelector(".grp-card-meta").querySelector(".grp-card-members").textContent);
        return valA - valB;
    });

    servers.forEach((server) => {
        serversContainer.append(server)
    })
}

async function getMemberCount(inviteCode) {

    const grp_card = document.createElement("div")
          grp_card.classList.add("grp-card")

          Object.assign(grp_card.style, {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.35rem',
            background: '#171020',
            border: '1px solid #24242f',
            borderRadius: '14px',
            padding: '1rem 0.75rem 0.875rem',
            transition: 'border-color 0.15s'
          })

          const grp_card_link = document.createElement("a")
          grp_card_link.classList.add("grp_card_link")

          Object.assign(grp_card_link.style, {
            display: 'flex',
            gap: '1rem',
            textDecoration: 'none',
            color: 'inherit',
            flex: '1',
            minHeight: '0',
            flexDirection: 'column'
          })

          const grp_card_icon = document.createElement("img")
          grp_card_icon.classList.add("grp-card-icon")
          grp_card_icon.alt = "Vortex"

          Object.assign(grp_card_icon.style, {
            aspectRatio: '1',
            height: '200px',
            borderRadius: '10px',
            objectFit: 'contain',
            flexShrink: '0',
            width: '90%'
          })

          const grp_card_text = document.createElement("span")
          grp_card_text.classList.add("grp-card-text")

          Object.assign(grp_card_text.style, {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            flex: '1',
            minWidth: '0'
          })

          const grp_card_name = document.createElement("span")
          grp_card_name.classList.add("grp-card-name")

          Object.assign(grp_card_name.style, {
            fontWeight: '700',
            fontSize: '1.125rem',
            color: '#fff',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          })

          const grp_card_desc = document.createElement("span")
          grp_card_desc.classList.add("grp-card-desc")

          Object.assign(grp_card_desc.style, {
            fontSize: '0.875rem',
            lineHeight: '1.45',
            color: '#8a8a9c',
            display: '-webkit-box',
            overflow: 'hidden'
          })

          const grp_card_bottom = document.createElement("div")
          grp_card_bottom.classList.add("grp-card-bottom")

          Object.assign(grp_card_bottom.style, {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginTop: 'auto'
          })

          const grp_card_meta = document.createElement("div")
          grp_card_meta.classList.add("grp-card-meta")

          Object.assign(grp_card_meta.style, {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem',
            minWidth: '0'
          })

          const grp_card_owner = document.createElement("a")
          grp_card_owner.classList.add("grp-card-owner")
          grp_card_owner.href = `#`

          Object.assign(grp_card_owner.style, {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            maxWidth: '100%',
            minWidth: '0',
            fontSize: '0.9375rem',
            fontWeight: '700',
            color: '#a87bfa',
            textDecoration: 'none'
          })

          const crown_icon = document.createElement("i")
          crown_icon.classList.add("fa-solid")
          crown_icon.classList.add("fa-crown")

          const grp_card_members = document.createElement("span")
          grp_card_members.classList.add("grp-card-members")

          Object.assign(grp_card_members.style, {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            minWidth: '0',
            fontSize: '0.875rem',
            color: '#8a8a9c'
          })

          const members_icon = document.createElement("i")
          members_icon.classList.add("fa-solid")
          members_icon.classList.add("fa-user-group")

          const page_link = document.createElement("a")

          const page_btn = document.createElement("button")
          page_btn.classList.add("btn-primary")
          page_btn.classList.add("grp-card-join")

          Object.assign(page_btn.style, {
            background: '#7c3aed',
            color: '#fff',
            border: '1px solid #7c3aed',
            fontFamily: 'inherit',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            padding: '10px',
            borderRadius: '10px'
          })

          page_btn.textContent = "Join Server";

          document.querySelector(".servers-container").append(grp_card)

          grp_card.append(grp_card_link)

          grp_card_link.append(grp_card_icon)
          grp_card_link.append(grp_card_text)

          grp_card_text.append(grp_card_name)
          grp_card_text.append(grp_card_desc)

          grp_card.append(grp_card_bottom)

          grp_card_bottom.append(grp_card_meta)
          grp_card_bottom.append(page_link)

          page_link.append(page_btn)

          grp_card_meta.append(grp_card_owner)

          grp_card_owner.prepend(crown_icon)

          grp_card_meta.append(grp_card_members)

          grp_card_members.prepend(members_icon)

    try {

        const data = db.find(item => item.code === inviteCode);

        grp_card_name.textContent = data.name
        grp_card_members.textContent = `${data.memberCount} Members`
        grp_card_desc.textContent = data.description
        page_link.href = `https://www.discord.gg/${data.code}`
        grp_card_owner.textContent = data.ownerName

        grp_card_icon.src = data.icon

        let clone = grp_card.cloneNode(true)

        document.querySelector(".servers-container-cache").append(clone)

    } catch (error) {
        console.error('Error fetching member count:', error);
    }

    sort_members();
}

async function reset() {
  [... document.querySelector(".servers-container-cache").children].forEach((cachedserver) => {
    let clone = cachedserver.cloneNode(true)
    clone.style.opacity = 0;
    document.querySelector(".servers-container").append(clone);
    setTimeout(() => { clone.style.opacity = 1 }, 150)
  })
};

async function search() {

  let search_input = document.querySelector("#search-input")

  if (search_input.value.trim() == "") {
    [... document.querySelector(".servers-container").children].forEach((server) => { server.remove() });
    
    reset();
    return;
  }

  let match = false;
  let stay_names = [];

  [... document.querySelector(".servers-container").children].forEach((server) => {

    server.style.opacity = '1'

    let query = server.querySelector(".grp-card-name").textContent.toLowerCase().trim();

    console.log(`query:`,query)

    if (query.includes(search_input.value.toLowerCase().trim())) {
      setTimeout(() => {
match = true;
      stay_names.push(query);
      document.querySelector(".servers-container").prepend(server)
      }, 150)
    } else {
      server.style.opacity = '0'
    }

    console.log("stay children", stay_names);

  })



}

let db;

async function getDB() {
    // gotta use an async function because no await in global js
    let resp = await fetch("https://codedlunar.github.io/vortex-server-db/database.json");
    db = await resp.json()
}

async function main() {

    if (!db) {
      await getDB()
    }

    db.forEach((element) => {
        getMemberCount(element.code)
    })
}

main()

document.querySelector("#search-input").addEventListener('input', (e) => {
      search();
    });