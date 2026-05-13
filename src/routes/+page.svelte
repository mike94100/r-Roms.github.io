<script lang="ts">
    import { on } from "svelte/events";
    import { HugeiconsIcon } from "@hugeicons/svelte";
    import { SidebarLeftIcon } from '@hugeicons/core-free-icons';
</script>

<!-- Home page for the ROMs megathread -->
<div class="page-container">
    <h1 class="header1">
        r/ROMs Megathread Site
    </h1>
    <p class="page-description">
        Use the sidebar icon
        <HugeiconsIcon icon={SidebarLeftIcon} size={18} strokeWidth={2} class="inline-block align-middle" />
        at the top of the page to navigate the site for all information.
    </p>
    <p class="text">
        It is recommended to review the information in the
        <code class="inline-code">
            General
        </code>
        section of the megathread to address common questions.
    </p>
    <h2 class="header2">
        Issues
    </h2>
    <p class="text">
        Any issues found on this site should be posted to the
        <a
            href="https://github.com/r-Roms/r-Roms.github.io/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen"
            class="link" >GitHub Issues page</a
        >.
    </p>
    <h2 class="header2">
        Contributing
    </h2>
    <p class="text">
        The Megathread consists of aggregated links hosted on many sites.
        Keeping these files available require the support of users. Please
        consider making donations to your favorite sites if they allow it.
    </p>
    <h2 class="header2">
        Additional Information
    </h2>
    <ul class="list-bulleted">
        <li>Internet Archive files with a lock icon beside the name require an
        account to download.</li>
        <li><code class=.inline-code>.zip</code> and
            <code class=.inline-code>.7z</code>,
            among others, are common archive file types. These may require
            extracting the underlying files to use, typically for very large or
            disc-based games</li>
    </ul>
    <h2 class="header2">
        Designer Shoutout
    </h2>
    <p class="text">
        This is a shoutout to my designer and friend AshLee whose design skills helped make the megathread more usable, easier to update and visually nicer.
        Her blog can be found at         
        <a
            href="https://www.ashleehee.com/"
            class="link"
            >https://www.ashleehee.com/</a>.
    </p>
</div>
