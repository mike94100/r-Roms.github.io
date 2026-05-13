<script lang="ts">
    import type { Link } from "$lib/types.ts";

    const databases: Link[] = [
        {
            name: "No-Intro",
            url: "https://no-intro.org",
            description: "Catalogs accurate file hashes for flash media"
        },
        {
            name: "Redump",
            url: "http://redump.org",
            description: "Catalogs accurate file hashes for optical media"
        },
        {
            name: "TOSEC",
            url: "https://www.tosecdev.org",
            description: "Catalogs accurate file hashes for flash media " +
            "(TOSEC), optical media (TOSEC-ISO), and auxiliary resources " +
            "(TOSEC-PIX)"
        },
        {
            name: "Hasheous",
            url: "https://hasheous.org",
            description: "Catalogs ROM hashes and matches those hashes with " +
            "metadata providers"
        },
        {
            name: "IGDB",
            url: "https://www.igdb.com",
            description: "Metadata and media for games"
        },
        {
            name: "Screenscraper",
            url: "https://www.screenscraper.fr",
            description: "Visual (Image & Video) media"
        },
        {
            name: "RetroAchievements",
            url: "https://retroachievements.org",
            description: "Retro game achievements"
        },
        {
            name: "SteamGridDB",
            url: "https://www.steamgriddb.com",
            description: "Images for front-end presentation"
        },
        {
            name: "HowLongToBeat",
            url: "https://howlongtobeat.com",
            description: "Game & playtime tracking"
        },
    ]

    const hashers: Link[] = [
        {
            name: "emn178's Online Tools",
            url: "https://emn178.github.io/online-tools/md5_checksum.html",
        },
    ]
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
        Preservation
    </h1>
    <h1 class="header2">
        Databases
    </h1>
    <p class="text">
        Many online groups serve to aggregate accurate information related to
        Video Games, ROM files, BIOS files, media, and more. This is done to
        ensure users can verify files for emulation and provide various types
        of metadata and media for presentation.
    </p>
    <p class="text">
        Collections often refer to one of the below databases, typically
        No-Intro or Redump, to denote that the ROMs or BIOS files have been
        verified for accuracy with that database.
    </p>
    {@render listBulleted(databases)}
    <h2 class="header2">
        File Hashing / Checksums
    </h2>
    <p class="text">
        File hashing is a method of generating a unique fingerprint (called a
        hash or checksum) from a file's data using an algorithm. Any change in
        the file data produces a different hash. Users can ensure any
        file they have is accurate simply by comparing the hash string to a
        known good hash without redownloading a file in its entirety.
    </p>
    <p class="text">
        File hashing is extremely beneficial with ROM files, allowing users
        to validate their ROM files against known good databases regardless of
        file-naming scheme. Hashing is also used to validate base ROMs to
        ensure ROM patches are applied only to ROMs that will work.
    </p>
    <p class="text">
        Preservation groups maintain databases of accurate ROM file hashes
        without distributing ROMs themselves. This lets them serve as stable
        resources since they not restricted by copyright issues (they do not
        host ROMs) or data storage costs (file hashes are short text strings).
    </p>
    <p class="text">
        For reference, consider Paper Mario: The Thousand-Year Door for 
        Gamecube.
    </p>
    <ol class="list-bulleted">
        <li>The uncompressed <code class="inline-code">.iso</code> file is
        1,459,978,240B or ~1.36GiB</li>
        <li>The compressed <code class="inline-code">.rvz</code> file can be
        330,493,036B or ~315.2MiB</li>
        <li>Common file hashes are 
            <code class="inline-code">CRC32=0477b085</code> or 8B,
            <code class="inline-code">
                MD5=e30d573cf8a53f22c6c5bb355c0cfd61</code> or 32B, 
            <code class="inline-code">
                SHA-1=1fbb7eaa7b4188c96f1019bac43439c972ba6758</code> or 40B
        </li>
    </ol>
    <p class="text">
        Recommended file hashing tools are:
    </p>
    {@render listBulleted(hashers)}
</div>
