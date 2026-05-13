<script lang="ts">
    import type { Console, Emulator, FileType} from "$lib/types.ts";  

    const ConsoleGBA: Console = { manufacturer: "Nintendo", name: "Game Boy Advance", emulators: [], fileTypes: []}

    const EmulatorMGBA: Emulator = { name: "mGBA", platforms: ["Windows", "MacOS", "Linux", "Android", "iOS via RetroArch"]}

    const FileGBA: FileType = { name: "gba", compressed: false, encrypted: false}
    const FileZIP: FileType = { name: "zip", compressed: true, encrypted: false}

</script>