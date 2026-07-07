# UI Components

All UI in this project is built with **shadcn/ui**. Do not create custom components from scratch. If a component doesn't exist yet in `components/ui/`, add it with the shadcn CLI first.

---

## Rules

1. **Always use shadcn/ui components.** Never hand-write a button, input, dialog, card, table, dropdown, or any other primitive — use the shadcn equivalent.
2. **Never edit files in `components/ui/` manually.** They are owned by shadcn and should only be added or upgraded via the CLI.
3. **Add missing components with the CLI**, then import and use them.
4. **Use `cn()` for conditional classes**, never inline `style={{}}` props for things achievable with Tailwind.

---

## Adding a Component

```bash
npx shadcn@latest add <component-name>
```

Examples:

```bash
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add card
npx shadcn@latest add table
npx shadcn@latest add badge
npx shadcn@latest add dropdown-menu
npx shadcn@latest add toast
npx shadcn@latest add form
npx shadcn@latest add label
```

Components are installed to `components/ui/`. Import from `@/components/ui/<name>`.

---

## Configuration

shadcn is configured in `components.json`:

- **Style**: `base-nova`
- **Base color**: `neutral`
- **CSS variables**: enabled
- **Icon library**: `lucide-react`
- **RSC**: enabled (components support Server Components by default)

---

## Usage Examples

### Button

```tsx
import { Button } from "@/components/ui/button";

<Button>Shorten</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline" size="sm">Copy</Button>
```

### Input

```tsx
import { Input } from "@/components/ui/input";

<Input placeholder="https://example.com" name="url" />;
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>My Links</CardTitle>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>;
```

### Dialog

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Link</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>;
```

### Form (with react-hook-form)

```tsx
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
```

---

## `cn()` Helper

Always use `cn()` from `@/lib/utils` to merge conditional class names:

```tsx
import { cn } from "@/lib/utils";

<Button className={cn("w-full", isLoading && "opacity-50 cursor-not-allowed")}>
  Submit
</Button>;
```

---

## Icons

Use **Lucide React** for all icons — it is the configured icon library for shadcn in this project:

```tsx
import { Link2, Copy, Trash2, ExternalLink } from "lucide-react";

<Link2 className="w-4 h-4" />;
```

Do not install or use other icon libraries (Heroicons, FontAwesome, etc.).

---

## What NOT to Do

```tsx
// WRONG — hand-written button primitive
<button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>;

// CORRECT — shadcn Button
import { Button } from "@/components/ui/button";
<Button>Submit</Button>;
```

```tsx
// WRONG — custom input component
export function MyInput({ ... }) { return <input className="border rounded px-2" /> }

// CORRECT — shadcn Input
import { Input } from "@/components/ui/input";
<Input placeholder="..." />
```
