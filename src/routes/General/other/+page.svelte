<script lang="ts">
    import type { Link } from "$lib/types.ts";

    const browsers: Link[] = [
        { name: "Vivaldi", url: "https://vivaldi.com" },
        { name: "Brave", url: "https://brave.com" },
        { name: "Helium", url: "https://helium.computer" },
    ]

    const extensions: Link[] = [
        { name: "uBlock Origin - Firefox", url: "https://addons.mozilla.org/en-US/android/addon/ublock-origin/" },
        { name: "uBlock Origin - Chrome", url: "https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en" },
        { name: "uBlock Origin - Opera", url: "https://addons.opera.com/en/extensions/details/ublock/" },
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
        Other Information
    </h1>
    <h2 class="header2">
        Adblock
    </h2>
    <p class="text">
        An adblocker is recommended when accessing certain links on this
        megathread and the Internet in general. This can be installed as
        an extension in your browser or integrated into the browser.
    </p>
    <h3 class="header3">
        Browsers
    </h3>
    {@render listBulleted(browsers)}
    <h2 class="header2">
        Extensions
    </h2>
    {@render listBulleted(extensions)}
    <p class="text">
        For Android: Download Firefox from the Play Store, locate the Addons
        menu and select uBlock Origin and add it to Firefox.
    </p>
    <h2 class="header2">
        Bypassing Download Limits
    </h2>
    <h3 class="header3">
        Google Drive
    </h3>
    <p class="text">
        When downloading you may see the error message
        <code class="inline-code">Download quota exceeded, so you can't download
        this file at this time</code>.
        The steps to bypass the download quota limit are:
    </p>

    <ol class="list-numbered">
        <li>Sign in to your Google account or create one</li>
        <li>Open Google Drive and go to “My Drive” in the sidebar</li>
        <li>Make a new folder with any name</li>
        <li>Go to the quota'd folder, right click on a file to download,
            and click “Add Shortcut to Drive”.</li>
        <li>Navigate to “My Drive”, then the new folder, then
            click “Add Shortcut”.</li>
        <li>Go to “My Drive” on the sidebar, right-click the folder and
            click “Download”.</li>
        <li>A .zip file with the file(s) you selected will download</li>
    </ol>
    <h3 class="header3">
        MEGA
    </h3>
    <p class="text">
        MEGA has a 5 GB download limit every 24 hours. To bypass MEGA's download
        limits, you will need either a VPN or a list of proxies. If you are
        using a VPN, simply connect to it. If you are using a list of proxies,
        download <a
            href="https://github.com/tonikelope/megabasterd"
            class="link"
            >MegaBasterd</a
        > and configure it with the list of proxies.
    </p>
</div>