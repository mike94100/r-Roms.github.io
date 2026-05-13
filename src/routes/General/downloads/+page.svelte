<script lang="ts">
    import type { Link } from "$lib/types.ts";

    const sites: Link[] = [
        {
            name: "Free Media Heck Yeah",
            url: "https://fmhy.net/gaming#rom-sites",
            description: "A large collection of sites related to acquiring free media of all types."
        },
        {
            name: "Vimm's Lair",
            url: "https://vimm.net",
            description: "Provides files up to the 3DS/PS3. Restricted to one download at a time."
        },
        {
            name: "Internet Archive",
            url: "https://archive.org",
            description: "Files with a lock icon require a free account to " +
            "download.<br><br>" +
            "Hosted collections have metadata files with extensions " +
            "<code class=\"inline-code\">.xml</code> and " +
            "<code class=\"inline-code\">.sqlite</code>. " +
            "These files are used by Internet Archive to store information " +
            "about the collections but are not needed by end users.<br><br>" +
            "Some collections are available for torrenting with the " +
            "<code class=\"inline-code\">.torrent</code> " +
            "file, but this is not recommended as the torrent's file list " +
            "is often incomplete compared to downloading from the website."
        },
        { name: "Edge Emulation", url: "https://edgeemu.net" },
        { name: "StartGame", url: "https://startgame.world" },
    ];
    const managers: Link[] = [
        { name: "AB Download Manager", url: "https://abdownloadmanager.com" },
        { name: "JDownloader2", url: "https://jdownloader.org/jdownloader2" },
    ];
</script>

{#snippet listBulleted(items: Link[])}
    <ul class="list-bulleted">
    {#each items as item}
        <li>
            <a href={item.url} class="link">{item.name}</a>
            {#if item.description}
                <br><span class="text-note">{@html item.description}</span>
            {/if}
        </li>
    {/each}
    </ul>
{/snippet}

<div class="page-container">
    <h1 class="header1">
        Direct Downloads
    </h1>
    <p class="text">
        Direct downloads, as the name implies, are links to download files
        directly from a single source. This is the most common way to download
        files online.
    </p>
    <h2 class="header2">
        Sites
    </h2>
    {@render listBulleted(sites)}
    <h2 class="header2">
        Download Managers
    </h2>
    <p class="text">
        Download Managers are dedicated downloading programs separate from
        using a browser directly. They offer many potential benefits over
        downloading in a browser, such as faster downloads using multiple
        connections, resumable downloads, link grabbing, bulk downloads,
        artificial speed limits, post-download actions, and more.
    </p>
    {@render listBulleted(managers)}
</div>
