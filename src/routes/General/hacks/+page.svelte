<script lang="ts">
    import { resolve } from "$app/paths";
    import {
        Table,
        TableBody,
        TableCell,
        TableHead,
        TableHeader,
        TableRow,
    } from "$lib/components/ui/table/index.js";

    interface Sites {
        name: string;
        url: string;
        description?: string;
    }

    const sites: Sites[] = [
        {
            name: "Hackdex",
            url: "https://hackdex.app",
            description: "A community hub hosting many Pokémon ROM Hacks " +
            "Uploaded ROMs should be uncompressed (i.e. *.gba) not a " +
            "compressed archive (i.e. *.zip)."
        },
        {
            name: "RomPatcherJS",
            url: "https://www.marcrobledo.com/RomPatcher.js/",
            description: "A Popular web-tool to patch ROM files. Does not provide " +
            "the files itself."
        },
        {
            name: "r/PokemonROMhacks",
            url: "https://www.reddit.com/r/PokemonROMhacks/",
        },
        {
            name: "r/ROMhacks",
            url: "https://www.reddit.com/r/RomHacks/",
        },
        {
            name: "PokeCommunity",
            url: "https://pokecommunity.com",
        },
        {
            name: "GitHub",
            url: "https://github.com",
            description: "A common online software version control platform " +
            "sometimes used for development & distribution of ROM hacks."
        },
    ]
</script>

<div class="page-container">
    <h1 class="header1">
        ROM Hacks & Patching
    </h1>
    <p class="text">
        ROM Hacks are modifications of a base ROM image/file, typically
        provided by the developers as a patch file. Patching the patch file
        on the base ROM it was made for creates a patched ROM file that can
        be played similar to any other ROM.
        <br><br>
        ROM hacks are distibuted as patch files to minimize any copyright
        issues. They must be applied to specific versions of a ROM file to
        ensure the patched ROM is accurate. This is typically done via file
        hashes or checksums. See the
        <a href={resolve("/General/preservation")} class="link"
        >Preservation</a>
        section for more information.
    </p>
    <h2 class="header2">
        Sites
    </h2>
    <ul class="list-bulleted">
        {#each sites as site}
            <li>
                <a href={site.url} class="link">{site.name}</a>
                {#if site.description}
                    <br><span class="text">{site.description}</span>
                {/if}
            </li>
        {/each}
    </ul>
    <h2 class="header2">
        Pre-patched ROMs
    </h2>
    <p class="text">
        It is not recommended to download prepatched ROMs, unless that is how
        the developers distribute the game themselves. Some possible issues
        include:
    </p>

    <ol class="list-numbered">
        <li>Not downloading the most recent version of the game</li>
        <li>Not getting changelogs or notifications</li>
        <li>Not getting info on breaking changes requiring user input</li>
        <li>Not finding a prepatched ROM for the game </li>
        <li>Getting a ROM that was not properly patched</li>
        <li>Downloading malware (not very likely, but still possible)</li>
    </ol>
</div>
