<script lang="ts">
    type Console = {
        manufacturer: string;
        name: string;
        emulators: Emulator[];
        fileTypes: FileType[];
    };

    type Emulator = {
        name: string;
        platforms: string[];
        url?: string;
    };

    type FileType = {
        name: string;
        compressed: boolean;
        encrypted: boolean
    };

    const ConsoleGBA: Console = { manufacturer: "Nintendo", name: "Game Boy Advance", emulators: [], fileTypes: []}

    const EmulatorMGBA: Emulator = { name: "mGBA", platforms: ["Windows", "MacOS", "Linux", "Android", "iOS via RetroArch"]}

    const FileGBA: FileType = { name: "gba", compressed: false, encrypted: false}
    const FileZIP: FileType = { name: "zip", compressed: true, encrypted: false}

</script>