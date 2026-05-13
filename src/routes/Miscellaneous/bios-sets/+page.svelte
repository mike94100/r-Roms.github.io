<script lang="ts">
    import type { Link } from "$lib/types.ts";

    const link: Link[] = [
        { name: "RetroBIOS", url: "https://abdess.github.io/retrobios/" },
        { name: "RetroBIOS (GitHub)", url: "https://github.com/Abdess/retrobios" },
        { name: "Redump BIOS sets", url: "https://archive.org/download/2019_11_25_redump_bios" },
        { name: "TOSEC Firmware and Operating Systems Collection", url: "https://archive.org/download/tosec_fw_os" },
        { name: "Retroarch System Files (BIOS/Firmwares/OS)", url: "https://archive.org/download/RetroarchSystemFiles/Retroarch-System/" },
        { name: "Firmwares", url: "https://mega.nz/folder/9ZdQwaaY#u63KaI0MsKcIqWE2GQmUuA" },
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

<div class="mx-8 mb-8 mt-8 space-y-4 bg-background">
    <h1 class="scroll-m-20 text-balance text-4xl font-extrabold tracking-tight">
        BIOS Sets
    </h1>
    <p class="leading-7 [&:not(:first-child)]:mt-6">
        BIOS sets are large, sorted, verified collections of BIOS and firmware
        files, typically provided as a single archive file that you will need
        to extract prior to use. The BIOS sets here are provided in no
        particular order.
    </p>
    {@render listBulleted(link)}
</div>