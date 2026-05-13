<script lang="ts">
    import type { Link } from "$lib/types.ts";

    export function bulletList(items: Link[]): string {
        let html = `<ul class="list-bulleted">`;
        items.forEach(item => {
            html += `<li><a href="${item.url}" class="link">${item.name}</a>`;
            if (item.description) {
                html += `<br><span class="text-note">${item.description}</span>`;
            }
            html += '</li>';
        });
        html += `</ul>`;
        return html;
    }

</script>
