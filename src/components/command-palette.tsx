import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { NAV_LINKS, SECONDARY_LINKS, SOCIAL_LINKS } from "~/config/site";

const PAGES = [{ label: "Home", href: "/" }, ...NAV_LINKS, ...SECONDARY_LINKS];

const GROUP_CLASS =
  "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:text-mute [&_[cmdk-group-heading]]:text-[13px]";

const ITEM_CLASS =
  "flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-[15px] data-[selected=true]:bg-surface";

function navigate(href: string) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    window.open(href, "_blank", "noopener,noreferrer");
  } else {
    window.location.assign(href);
  }
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function select(href: string) {
    setOpen(false);
    navigate(href);
  }

  return (
    <Command.Dialog
      className="border-line bg-bg text-fg fixed inset-x-4 top-[18vh] z-50 mx-auto max-w-[30rem] overflow-hidden rounded-lg border"
      label="Command menu"
      onOpenChange={setOpen}
      open={open}
      overlayClassName="fixed inset-0 z-40 bg-bg/70"
    >
      <Command.Input
        className="border-line placeholder:text-mute w-full border-b bg-transparent px-4 py-3 text-[15px] outline-none"
        placeholder="Go to a page"
      />
      <Command.List className="max-h-80 overflow-y-auto p-1.5">
        <Command.Empty className="text-mute px-3 py-6 text-center">
          Nothing matches.
        </Command.Empty>

        <Command.Group className={GROUP_CLASS} heading="Pages">
          {PAGES.map((item) => (
            <Command.Item
              className={ITEM_CLASS}
              key={item.href}
              onSelect={() => select(item.href)}
              value={item.label}
            >
              {item.label}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group className={GROUP_CLASS} heading="Elsewhere">
          {SOCIAL_LINKS.map((item) => (
            <Command.Item
              className={ITEM_CLASS}
              key={item.href}
              onSelect={() => select(item.href)}
              value={item.label}
            >
              {item.label}
              <span aria-hidden="true" className="text-mute">
                ↗
              </span>
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
