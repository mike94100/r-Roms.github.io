<script lang="ts">
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { resolve } from "$app/paths";

    type SidebarItem = {
        title: string;
        url: string;
    };

    type SidebarSection = {
        label: string;
        items: SidebarItem[];
    };

    const sidebarSections: SidebarSection[] = [
        {
            label: "General",
            items: [
                { title: "Downloads", url: resolve("/General/downloads") },
                { title: "Torrents", url: resolve("/General/torrents") },
                { title: "ROM Hacks", url: resolve("/General/hacks") },
                { title: "File Types", url: resolve("/General/file-types") },
                { title: "Preservation", url: resolve("/General/preservation") },
                { title: "Other", url: resolve("/General/other") },
            ]
        },
        {
            label: "Nintendo",
            items: [
                { title: "Nintendo Games", url: resolve("/Nintendo/nintendo-games") },
                { title: "Nintendo DS", url: resolve("/Nintendo/nintendo-ds") },
                { title: "Nintendo 3DS", url: resolve("/Nintendo/nintendo-3ds") },
                { title: "Nintendo GameCube", url: resolve("/Nintendo/nintendo-gamecube") },
                { title: "Nintendo Wii", url: resolve("/Nintendo/nintendo-wii") },
                { title: "Nintendo Wii U", url: resolve("/Nintendo/nintendo-wii-u") },
            ]
        },
        {
            label: "Sony",
            items: [
                { title: "NoPayStation", url: resolve("/Sony/nopaystation") },
                { title: "Sony Playstation", url: resolve("/Sony/sony-playstation") },
                { title: "Sony Playstation 2", url: resolve("/Sony/sony-playstation-2") },
                { title: "Sony Playstation Portable", url: resolve("/Sony/sony-playstation-portable") },
                { title: "Sony Playstation 3", url: resolve("/Sony/sony-playstation-3") },
                { title: "Sony Playstation Vita", url: resolve("/Sony/sony-playstation-vita") },
            ]
        },
        {
            label: "Microsoft",
            items: [
                { title: "Microsoft Xbox", url: resolve("/Microsoft/microsoft-xbox") },
                { title: "Microsoft Xbox 360", url: resolve("/Microsoft/microsoft-xbox360") },
            ]
        },
        {
            label: "Sega",
            items: [
                { title: "Sega Games", url: resolve("/Sega/sega-games") },
                { title: "Sega Dreamcast", url: resolve("/Sega/sega-dreamcast") },
                { title: "Sega Saturn", url: resolve("/Sega/sega-saturn") },
                { title: "Sega CD", url: resolve("/Sega/sega-cd") },
            ]
        },
        {
            label: "Retro & Arcade",
            items: [
                { title: "Retro Games", url: resolve("/Retro & Arcade/retro-games") },
                { title: "Arcade", url: resolve("/Retro & Arcade/arcade") },
            ]
        },
        {
            label: "PC",
            items: [
                { title: "PC Games", url: resolve("/PC/pc-games") },
            ]
        },
        {
            label: "Miscellaneous",
            items: [
                { title: "ROM Sets", url: resolve("/Miscellaneous/rom-sets") },
                { title: "BIOS Sets", url: resolve("/Miscellaneous/bios-sets") },
                { title: "Other", url: resolve("/Miscellaneous/other") },
            ]
        }
    ];
</script>

<Sidebar.Root collapsible="offcanvas">
    <Sidebar.Content>
        {#each sidebarSections as section}
            <Sidebar.Group>
                <Sidebar.GroupLabel>{section.label}</Sidebar.GroupLabel>
                <Sidebar.GroupContent>
                    <Sidebar.Menu>
                        {#each section.items as item}
                            <Sidebar.MenuItem>
                                <Sidebar.MenuButton>
                                    {#snippet child({ props })}
                                        <a href={item.url} {...props}>
                                            <span>{item.title}</span>
                                        </a>
                                    {/snippet}
                                </Sidebar.MenuButton>
                            </Sidebar.MenuItem>
                        {/each}
                    </Sidebar.Menu>
                </Sidebar.GroupContent>
            </Sidebar.Group>
        {/each}
    </Sidebar.Content>
</Sidebar.Root>
