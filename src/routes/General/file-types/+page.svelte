<script lang="ts">
    import type { Link } from "$lib/types.ts";
    import Rvz from "$lib/components/rvz.svelte";

    const archive_sw: Link[] = [
        { name: "PeaZip", url: "https://peazip.github.io", description: "Windows, MacOS, Linux" },
        { name: "7-Zip", url: "https://www.7-zip.org", description: "Windows" },
        { name: "Files (iOS / iPadOS)", url: "https://support.apple.com/en-us/102532", description: "Supports .zip and .7z if renamed to .zip" },
        { name: "Files (Android)", url: "https://support.google.com/files/answer/9048509?hl=en", description: "Supports .zip" },
        { name: "Windows Explorer", url: "https://support.microsoft.com/en-us/windows/zip-and-unzip-files-8d28fa72-f2f9-712f-67df-f80cf89fd4e5", description: "Supports .zip" }
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
        File Types
    </h1>
    <h2 class="header2">
        Archive Files
    </h2>
    <p class="text">
        Archives are used to store the content of one or more files within a
        single file. Archives are commonly compressed to reduce disk and
        network usage. The most common archives for ROMs are .zip and .7z,
        among several others.
    </p> 
    <p class="text">
        Archives may need to be extracted depending on your emulator and the
        ROM file type inside. Generally, disc-based games and cartidge-based
        games starting with the 3DS must be extracted.
    </p>
    <h2 class="header3">
        Programs
    </h2>
    {@render listBulleted(archive_sw)}
    <Rvz />
</div>
