<script lang="ts">
    import type { Link } from "$lib/types.ts";

    const link: Link[] = [
        { name: "No-Intro - Source Code Sets", url: "https://archive.org/download/ni-sc/ni-sc/" },
        { name: "[TOSEC-PIX] Part 1", url: "https://archive.org/download/tosec-pix" },
        { name: "[TOSEC-PIX] Part 2", url: "https://archive.org/download/tosec-pix-part2" },
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

<!-- Home page for the ROMs megathread -->
<div class="mx-8 mb-8 mt-8 space-y-4 bg-background">
    <h1 class="scroll-m-20 text-balance text-4xl font-extrabold tracking-tight">
        Other
    </h1>
    <p class="leading-7 [&:not(:first-child)]:mt-6">
        Other files that are not ROMs or BIOS files.
    </p>
    {@render listBulleted(link)}
</div>