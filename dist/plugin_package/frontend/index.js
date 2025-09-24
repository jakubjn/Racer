const Si = {
  // For PrimeVue version 3
  accordiontab: {
    root: {
      class: ["mb-0", "border-b border-surface-200 dark:border-surface-700"]
    },
    header: ({ props: e }) => ({
      class: [
        // State
        { "select-none pointer-events-none cursor-default opacity-60": e == null ? void 0 : e.disabled }
      ]
    }),
    headerAction: {
      class: [
        //Font
        "font-semibold",
        "leading-none",
        // Alignments
        "flex justify-between items-center",
        "flex-row-reverse",
        "relative",
        // Sizing
        "p-[1.125rem]",
        // Shape
        "rounded-md",
        "border-0",
        // Color
        "bg-surface-0 dark:bg-surface-900",
        "text-surface-600 dark:text-surface-0/80",
        // Transition
        "transition duration-200 ease-in-out",
        "transition-shadow duration-200",
        // States
        "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
        // Focus
        // Misc
        "cursor-pointer no-underline select-none"
      ]
    },
    headerIcon: ({ context: e }) => ({
      class: ["inline-block ml-2", { "text-surface-900 dark:text-surface-0": e.active }]
    }),
    headerTitle: {
      class: "leading-none"
    },
    content: {
      class: [
        // Spacing
        "p-[1.125rem] pt-0",
        //Shape
        "border-0 rounded-none",
        // Color
        "bg-surface-0 dark:bg-surface-900",
        "text-surface-600 dark:text-surface-0/70"
      ]
    },
    transition: {
      enterFromClass: "max-h-0",
      enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
      enterToClass: "max-h-[1000px]",
      leaveFromClass: "max-h-[1000px]",
      leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
      leaveToClass: "max-h-0"
    }
  }
}, $i = {
  content: "p-5 pt-0 bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-surface-0/70"
}, Ti = {
  root: ({ context: e }) => ({
    class: [
      "flex items-center justify-between bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-surface-0/70 p-[1.125rem] font-semibold outline-transparent",
      {
        "focus-visible:outline-offset-2 focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400": !e.disabled
      },
      {
        "hover:text-surface-700 dark:hover:text-surface-0": !e.disabled
      }
    ]
  }),
  toggleIcon: "inline-block text-surface-900 dark:text-surface-0 w-4 h-4"
}, Pi = {
  root: ({ props: e, context: t }) => ({
    class: [
      "flex flex-col border-b border-surface-200 dark:border-surface-700",
      {
        "[&>[data-pc-name=accordionheader]]:select-none [&>[data-pc-name=accordionheader]]:pointer-events-none [&>[data-pc-name=accordionheader]]:cursor-default [&>[data-pc-name=accordionheader]]:opacity-60": e == null ? void 0 : e.disabled,
        "[&>[data-pc-name=accordionheader]]:text-surface-700 dark:[&>[data-pc-name=accordionheader]]:text-surface-100 hover:[&>[data-pc-name=accordionheader]]:text-surface-800 dark:hover:[&>[data-pc-name=accordionheader]]:text-surface-0": !e.disabled && t.active,
        "[&>[data-pc-section=toggleicon]]:text-surface-700 dark:[&>[data-pc-section=toggleicon]]:text-surface-100 hover:[&>[data-pc-section=toggleicon]]:text-surface-800 dark:hover:[&>[data-pc-section=toggleicon]]:text-surface-0": !e.disabled && t.active,
        "[&:last-child>[data-pc-name=accordioncontent]>[data-pc-section=content]]:rounded-b-md": !e.disabled && t.active,
        "[&:last-child>[data-pc-name=accordionheader]]:rounded-b-md": !e.disabled && !t.active
      },
      "[&:nth-child(n+2)>[data-pc-name=accordionheader]]:border-t-0",
      "[&:first-child>[data-pc-name=accordionheader]]:rounded-t-md"
    ]
  })
}, Oi = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex
      {
        flex: e.fluid,
        "inline-flex": !e.fluid
      },
      // Size
      { "w-full": e.multiple },
      { "[&>input]:!rounded-r-none": e.dropdown },
      // Color
      "text-surface-900 dark:text-surface-0",
      //States
      {
        "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  inputMultiple: ({ props: e, state: t }) => ({
    class: [
      // Font
      "leading-none",
      // Flex
      "flex items-center flex-wrap",
      "gap-2",
      // Spacing
      "m-0 list-none",
      "py-1 px-1",
      // Size
      "w-full",
      // Shape
      "appearance-none rounded-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-700": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // States
      { "hover:border-surface-400 dark:hover:border-surface-700": !e.invalid },
      { "outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400": t.focused },
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-text overflow-hidden"
    ]
  }),
  inputToken: {
    class: ["py-1 px-0 ml-2", "inline-flex flex-auto"]
  },
  inputChip: {
    class: "flex-auto inline-flex pt-1 pb-1"
  },
  input: {
    class: "border-none outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full"
  },
  dropdown: {
    class: [
      "relative",
      // Alignments
      "items-center inline-flex justify-center text-center align-bottom",
      // Shape
      "rounded-r-md",
      // Size
      "py-2 leading-none",
      "w-10",
      // Colors
      "text-primary-contrast",
      "bg-primary",
      "border border-primary",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 ",
      "hover:bg-primary-emphasis hover:border-primary-emphasis",
      "focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  loader: {
    class: ["text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[0.5rem] -mt-2 animate-spin"]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md",
      // Size
      "overflow-auto"
    ]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected },
      { "hover:bg-highlight-emphasis": e.selected },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Ii = {
  root: ({ props: e, parent: t }) => {
    var r, n, o;
    return {
      class: [
        // Font
        {
          "text-xl": e.size == "large",
          "text-2xl": e.size == "xlarge"
        },
        // Alignments
        "inline-flex items-center justify-center",
        "relative",
        // Sizes
        {
          "h-8 w-8": e.size == null || e.size == "normal",
          "w-12 h-12": e.size == "large",
          "w-16 h-16": e.size == "xlarge"
        },
        { "-ml-4": ((r = t.instance.$style) == null ? void 0 : r.name) == "avatargroup" },
        // Shapes
        {
          "rounded-lg": e.shape == "square",
          "rounded-full": e.shape == "circle"
        },
        { "border-2": ((n = t.instance.$style) == null ? void 0 : n.name) == "avatargroup" },
        // Colors
        "bg-surface-300 dark:bg-surface-700",
        { "border-white dark:border-surface-800": ((o = t.instance.$style) == null ? void 0 : o.name) == "avatargroup" }
      ]
    };
  },
  image: ({ props: e }) => ({
    class: [
      "h-full w-full",
      {
        "rounded-lg": e.shape == "square",
        "rounded-full": e.shape == "circle"
      }
    ]
  })
}, Ai = {
  root: {
    class: "flex items-center"
  }
}, Li = {
  root: ({ props: e }) => {
    var t, r;
    return {
      class: [
        // Font
        "font-bold",
        {
          "text-xs leading-[1.5rem]": e.size === null,
          "text-[0.625rem] leading-[1.25rem]": e.size === "small",
          "text-lg leading-[2.25rem]": e.size === "large",
          "text-2xl leading-[3rem]": e.size === "xlarge"
        },
        // Alignment
        "text-center inline-block",
        // Size
        "p-0 px-1",
        {
          "w-2 h-2": e.value === null,
          "min-w-[1.5rem] h-[1.5rem]": e.value !== null && e.size === null,
          "min-w-[1.25rem] h-[1.25rem]": e.size === "small",
          "min-w-[2.25rem] h-[2.25rem]": e.size === "large",
          "min-w-[3rem] h-[3rem]": e.size === "xlarge"
        },
        // Shape
        {
          "rounded-full": ((t = e.value) == null ? void 0 : t.length) === 1,
          "rounded-[0.71rem]": ((r = e.value) == null ? void 0 : r.length) !== 1
        },
        // Color
        "text-primary-contrast",
        {
          "bg-primary": e.severity == null || e.severity === "primary",
          "bg-surface-500 dark:bg-surface-400": e.severity === "secondary",
          "bg-green-500 dark:bg-green-400": e.severity === "success",
          "bg-blue-500 dark:bg-blue-400": e.severity === "info",
          "bg-orange-500 dark:bg-orange-400": e.severity === "warn",
          "bg-purple-500 dark:bg-purple-400": e.severity === "help",
          "bg-red-500 dark:bg-red-400": e.severity === "danger",
          "text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0": e.severity === "contrast"
        }
      ]
    };
  }
}, ji = {
  root: ({ context: e }) => ({
    class: [
      // Font
      "font-bold",
      "text-xs leading-5",
      // Alignment
      "flex items-center justify-center",
      "text-center",
      // Position
      "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right",
      // Size
      "m-0",
      {
        "p-0": e.nogutter || e.dot,
        "px-2": !e.nogutter && !e.dot,
        "min-w-[0.5rem] w-2 h-2": e.dot,
        "min-w-[1.5rem] h-6": !e.dot
      },
      // Shape
      {
        "rounded-full": e.nogutter || e.dot,
        "rounded-[10px]": !e.nogutter && !e.dot
      },
      // Color
      "text-primary-contrast",
      {
        "bg-primary": !e.info && !e.success && !e.warning && !e.danger && !e.help && !e.secondary,
        "bg-surface-500 dark:bg-surface-400": e.secondary,
        "bg-green-500 dark:bg-green-400": e.success,
        "bg-blue-500 dark:bg-blue-400": e.info,
        "bg-orange-500 dark:bg-orange-400": e.warning,
        "bg-purple-500 dark:bg-purple-400": e.help,
        "bg-red-500 dark:bg-red-400": e.danger
      }
    ]
  })
}, Ei = {
  root: "relative",
  mask: "bg-black/40 rounded-md"
}, zi = {
  root: {
    class: [
      // Shape
      "rounded-md",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      // Misc
      "overflow-x-auto"
    ]
  },
  list: {
    class: [
      // Flex & Alignment
      "flex items-center flex-nowrap",
      // Spacing
      "m-0 p-0 list-none leading-none"
    ]
  },
  itemLink: {
    class: [
      // Flex & Alignment
      "flex items-center gap-2",
      // Shape
      "rounded-md",
      // Color
      "text-surface-600 dark:text-white/70",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0",
      "focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transitions
      "transition-shadow duration-200",
      // Misc
      "text-decoration-none"
    ]
  },
  itemIcon: {
    class: "text-surface-600 dark:text-white/70"
  },
  separator: {
    class: [
      // Flex & Alignment
      "flex items-center",
      // Spacing
      "mx-2",
      // Color
      "text-surface-600 dark:text-white/70"
    ]
  }
}, Ri = {
  root: ({ props: e, context: t, parent: r, instance: n }) => ({
    class: [
      "relative",
      // Fluid
      { "w-full": e.fluid },
      // Alignments
      "items-center inline-flex text-center align-bottom justify-center",
      { "flex-col": (e.iconPos === "top" || e.iconPos === "bottom") && e.label },
      // Sizes & Spacing
      "leading-[normal]",
      {
        "px-3 py-2": e.size === null,
        "text-sm py-1.5 px-3": e.size === "small",
        "text-xl py-3 px-4": e.size === "large"
      },
      { "gap-2": e.label !== null },
      {
        "w-10 px-0 py-2": e.label == null && e.icon !== null
      },
      {
        "w-10 px-0 gap-0": n.hasIcon && !e.label && !e.badge,
        "rounded-[50%] h-10 [&>[data-pc-section=label]]:w-0 [&>[data-pc-section=label]]:invisible": n.hasIcon && !e.label && !e.badge && e.rounded
      },
      // Shapes
      { "shadow-lg": e.raised },
      { "rounded-md": !e.rounded, "rounded-full": e.rounded },
      { "rounded-none first:rounded-l-md last:rounded-r-md": r.instance.$name == "InputGroup" },
      // Link Button
      { "text-primary-600 bg-transparent border-transparent": e.link },
      // Plain Button
      { "text-white bg-gray-500 border border-gray-500": e.plain && !e.outlined && !e.text },
      // Plain Text Button
      { "text-surface-500": e.plain && e.text },
      // Plain Outlined Button
      { "text-surface-500 border border-gray-500": e.plain && e.outlined },
      // Text Button
      { "bg-transparent border-transparent": e.text && !e.plain },
      // Outlined Button
      { "bg-transparent border": e.outlined && !e.plain },
      // --- Severity Buttons ---
      // Primary Button
      {
        "text-surface-0": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
        "bg-primary-700": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
        "border border-primary-700": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain
      },
      // Primary Text Button
      { "text-primary-600": e.text && e.severity === null && !e.plain },
      // Primary Outlined Button
      { "text-primary-700 border border-primary-700": e.outlined && e.severity === null && !e.plain },
      // Secondary Button
      {
        "text-surface-900 dark:text-white": e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
        "bg-surface-100 dark:bg-surface-700": e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
        "border border-surface-100 dark:border-surface-700": e.severity === "secondary" && !e.text && !e.outlined && !e.plain
      },
      // Secondary Text Button
      { "text-surface-500 dark:text-surface-300": e.text && e.severity === "secondary" && !e.plain },
      // Secondary Outlined Button
      { "text-surface-500 dark:text-surface-300 border border-surface-500 hover:bg-surface-300/10": e.outlined && e.severity === "secondary" && !e.plain },
      // Success Button
      {
        "text-white dark:text-success-900": e.severity === "success" && !e.text && !e.outlined && !e.plain,
        "bg-success-500 dark:bg-success-400": e.severity === "success" && !e.text && !e.outlined && !e.plain,
        "border border-success-500 dark:border-success-400": e.severity === "success" && !e.text && !e.outlined && !e.plain
      },
      // Success Text Button
      { "text-success-500 dark:text-success-400": e.text && e.severity === "success" && !e.plain },
      // Success Outlined Button
      { "text-success-500 border border-success-500 hover:bg-success-300/10": e.outlined && e.severity === "success" && !e.plain },
      // Info Button
      {
        "text-white dark:text-surface-900": e.severity === "info" && !e.text && !e.outlined && !e.plain,
        "bg-blue-500 dark:bg-info-400": e.severity === "info" && !e.text && !e.outlined && !e.plain,
        "border border-blue-500 dark:border-info-400": e.severity === "info" && !e.text && !e.outlined && !e.plain
      },
      // Info Text Button
      { "text-info-400 dark:text-info-400": e.text && e.severity === "info" && !e.plain },
      // Info Outlined Button
      { "text-info-400 border border-info-400 hover:bg-info-300/10 ": e.outlined && e.severity === "info" && !e.plain },
      // Warning Button
      {
        "text-white dark:text-surface-900": e.severity === "warn" && !e.text && !e.outlined && !e.plain,
        "bg-orange-500 dark:bg-orange-400": e.severity === "warn" && !e.text && !e.outlined && !e.plain,
        "border border-orange-500 dark:border-orange-400": e.severity === "warn" && !e.text && !e.outlined && !e.plain
      },
      // Warning Text Button
      { "text-orange-500 dark:text-orange-400": e.text && e.severity === "warn" && !e.plain },
      // Warning Outlined Button
      { "text-orange-500 border border-orange-500 hover:bg-orange-300/10": e.outlined && e.severity === "warn" && !e.plain },
      // Help Button
      {
        "text-white dark:text-surface-900": e.severity === "help" && !e.text && !e.outlined && !e.plain,
        "bg-purple-500 dark:bg-purple-400": e.severity === "help" && !e.text && !e.outlined && !e.plain,
        "border border-purple-500 dark:border-purple-400": e.severity === "help" && !e.text && !e.outlined && !e.plain
      },
      // Help Text Button
      { "text-purple-500 dark:text-purple-400": e.text && e.severity === "help" && !e.plain },
      // Help Outlined Button
      { "text-purple-500 border border-purple-500 hover:bg-purple-300/10": e.outlined && e.severity === "help" && !e.plain },
      // Danger Button
      {
        "text-white dark:text-surface-900": e.severity === "danger" && !e.text && !e.outlined && !e.plain,
        "bg-danger-500 dark:bg-danger-400": e.severity === "danger" && !e.text && !e.outlined && !e.plain,
        "border border-danger-500 dark:border-danger-400": e.severity === "danger" && !e.text && !e.outlined && !e.plain
      },
      // Danger Text Button
      { "text-danger-400 dark:text-danger-400": e.text && e.severity === "danger" && !e.plain },
      // Danger Outlined Button
      { "text-danger-400 border border-danger-400 hover:bg-danger-300/10": e.outlined && e.severity === "danger" && !e.plain },
      // Contrast Button
      {
        "text-white dark:text-surface-900": e.severity === "contrast" && !e.text && !e.outlined && !e.plain,
        "bg-surface-900 dark:bg-surface-300": e.severity === "contrast" && !e.text && !e.outlined && !e.plain,
        "border border-surface-900 dark:border-surface-300": e.severity === "contrast" && !e.text && !e.outlined && !e.plain
      },
      // Contrast Text Button
      { "text-surface-900 dark:text-surface-300": e.text && e.severity === "contrast" && !e.plain },
      // Contrast Outlined Button
      { "text-surface-900 dark:text-surface-300 border border-surface-900 dark:border-surface-300": e.outlined && e.severity === "contrast" && !e.plain },
      // --- Severity Button States ---
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      // Link
      { "focus:ring-primary-400": e.link },
      // Plain
      { "hover:bg-gray-600 hover:border-gray-600": e.plain && !e.outlined && !e.text },
      // Text & Outlined Button
      { "hover:bg-surface-300/10": e.plain && (e.text || e.outlined) },
      // Primary
      { "hover:bg-primary-600/80 hover:border-primary-600/80": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain },
      { "focus:ring-primary-300": e.severity === null },
      // Text & Outlined Button
      { "hover:bg-primary-300/10": (e.text || e.outlined) && e.severity === null && !e.plain },
      // Secondary
      { "hover:bg-surface-200 dark:hover:bg-surface-600 hover:border-surface-200 dark:hover:border-surface-600": e.severity === "secondary" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-surface-500 dark:focus:ring-surface-400": e.severity === "secondary" },
      // Text & Outlined Button
      { "hover:bg-surface-300/10": (e.text || e.outlined) && e.severity === "secondary" && !e.plain },
      // Success
      { "hover:bg-success-600 dark:hover:bg-success-300 hover:border-success-600 dark:hover:border-success-300": e.severity === "success" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-success-500 dark:focus:ring-success-400": e.severity === "success" },
      // Text & Outlined Button
      { "hover:bg-success-300/10": (e.text || e.outlined) && e.severity === "success" && !e.plain },
      // Info
      { "hover:bg-blue-600 dark:hover:bg-info-300 hover:border-blue-600 dark:hover:border-info-300": e.severity === "info" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-blue-400 dark:focus:ring-info-300": e.severity === "info" },
      // Text & Outlined Button
      { "hover:bg-info-300/10": (e.text || e.outlined) && e.severity === "info" && !e.plain },
      // Warning
      { "hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300": e.severity === "warn" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-orange-500 dark:focus:ring-orange-400": e.severity === "warn" },
      // Text & Outlined Button
      { "hover:bg-orange-300/10": (e.text || e.outlined) && e.severity === "warn" && !e.plain },
      // Help
      { "hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300": e.severity === "help" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-purple-500 dark:focus:ring-purple-400": e.severity === "help" },
      // Text & Outlined Button
      { "hover:bg-purple-300/10": (e.text || e.outlined) && e.severity === "help" && !e.plain },
      // Danger
      { "hover:bg-danger-600 dark:hover:bg-danger-300 hover:border-danger-600 dark:hover:border-danger-300": e.severity === "danger" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-danger-500 dark:focus:ring-danger-400": e.severity === "danger" },
      // Text & Outlined Button
      { "hover:bg-danger-300/10": (e.text || e.outlined) && e.severity === "danger" && !e.plain },
      // Contrast
      { "hover:bg-surface-800 dark:hover:bg-surface-200 hover:border-surface-800 dark:hover:border-surface-200": e.severity === "contrast" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-surface-500 dark:focus:ring-surface-0": e.severity === "contrast" },
      // Text & Outlined Button
      { "hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)]": (e.text || e.outlined) && e.severity === "contrast" && !e.plain },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": t.disabled },
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer overflow-hidden select-none",
      // Badge
      "[&>[data-pc-name=badge]]:min-w-4 [&>[data-pc-name=badge]]:h-4 [&>[data-pc-name=badge]]:leading-4"
    ]
  }),
  label: ({ props: e }) => ({
    class: [
      "duration-200",
      "font-medium",
      {
        "hover:underline": e.link
      },
      { "flex-1": e.label !== null, "invisible w-0": e.label == null }
    ]
  }),
  icon: ({ props: e }) => ({
    class: [
      "text-base leading-4",
      "mx-0",
      {
        "mr-2": e.iconPos == "left" && e.label != null,
        "ml-2 order-1": e.iconPos == "right" && e.label != null,
        "order-2": e.iconPos == "bottom" && e.label != null
      }
    ]
  }),
  loadingIcon: ({ props: e }) => ({
    class: [
      "h-4 w-4",
      "mx-0",
      {
        "mr-2": e.iconPos == "left" && e.label != null,
        "ml-2 order-1": e.iconPos == "right" && e.label != null,
        "mb-2": e.iconPos == "top" && e.label != null,
        "mt-2": e.iconPos == "bottom" && e.label != null
      },
      "animate-spin"
    ]
  }),
  badge: ({ props: e }) => ({
    class: [{ "ml-2 w-4 h-4 leading-none flex items-center justify-center": e.badge }]
  })
}, Ni = {
  root: {
    class: [
      "[&>[data-pc-name=button]]:m-0",
      "[&>[data-pc-name=button]]:border-r-none",
      "[&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-tr-none",
      "[&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-br-none",
      "[&>[data-pc-name=button]:nth-child(n+2)]:rounded-tl-none",
      "[&>[data-pc-name=button]:nth-child(n+2)]:rounded-bl-none"
    ]
  }
}, Mi = {
  root: {
    class: [
      //Flex
      "flex flex-col",
      //Shape
      "rounded-[0.25rem]",
      "shadow-md",
      //Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-surface-0"
    ]
  },
  body: {
    class: [
      //Flex
      "flex flex-col",
      "gap-4",
      "p-6"
    ]
  },
  caption: {
    class: [
      //Flex
      "flex flex-col",
      "gap-2"
    ]
  },
  title: {
    class: "text-xl font-semibold mb-0"
  },
  subtitle: {
    class: [
      //Font
      "font-normal",
      //Spacing
      "mb-0",
      //Color
      "text-surface-600 dark:text-surface-0/60"
    ]
  },
  content: {
    class: "p-0"
  },
  footer: {
    class: "p-0"
  }
}, Fi = {
  root: {
    class: [
      // Flexbox
      "flex flex-col"
    ]
  },
  contentContainer: {
    class: [
      // Flexbox & Overflow
      "flex flex-col overflow-auto"
    ]
  },
  content: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      // Orientation
      {
        "flex-row": e.orientation !== "vertical",
        "flex-col": e.orientation == "vertical"
      },
      "[&>[data-pc-extend=button]]:self-center"
    ]
  }),
  viewport: {
    class: [
      // Overflow & Width
      "overflow-hidden w-full"
    ]
  },
  itemList: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      // Orientation & Sizing
      {
        "flex-row": e.orientation !== "vertical",
        "flex-col h-full": e.orientation == "vertical"
      }
    ]
  }),
  item: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex shrink-0 grow ",
      // Size
      {
        "w-full sm:w-[50%] md:w-[33.333333333333336%]": e.orientation !== "vertical",
        "w-full h-full": e.orientation == "vertical"
      }
    ]
  }),
  itemClone: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex shrink-0 grow",
      "unvisible",
      // Size
      {
        "w-full sm:w-[50%] md:w-[33.333333333333336%]": e.orientation !== "vertical",
        "w-full h-full": e.orientation == "vertical"
      }
    ]
  }),
  indicatorList: {
    class: [
      // Flexbox & Alignment
      "flex flex-row justify-center flex-wrap"
    ]
  },
  indicator: {
    class: [
      // Spacing
      "mr-2 mb-2"
    ]
  },
  indicatorButton: ({ context: e }) => ({
    class: [
      // Sizing & Shape
      "w-8 h-2 rounded-md",
      // Transitions
      "transition duration-200",
      // Focus Styles
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Color & Background
      {
        "bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600": !e.highlighted,
        "bg-primary hover:bg-primary-emphasis": e.highlighted
      }
    ]
  })
}, Vi = {
  root: ({ props: e, state: t }) => ({
    class: [
      "relative",
      // Flex
      {
        flex: e.fluid,
        "inline-flex": !e.fluid
      },
      // Shape
      "rounded-md",
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-600": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-600": !e.invalid },
      { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  label: ({ props: e, parent: t }) => {
    var r, n, o, s;
    return {
      class: [
        //Font
        "leading-[normal]",
        // Display
        "block",
        "flex-auto",
        // Color and Background
        "bg-transparent",
        "border-0",
        { "text-surface-800 dark:text-white/80": e.modelValue != null, "text-surface-400 dark:text-surface-500": e.modelValue == null },
        {
          "placeholder:text-transparent dark:placeholder:text-transparent": ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel",
          "!text-transparent dark:!text-transparent": ((n = t.instance) == null ? void 0 : n.$name) == "FloatLabel" && e.modelValue == null || ((o = e.modelValue) == null ? void 0 : o.length) == 0
        },
        // Sizing and Spacing
        "w-[1%]",
        "py-2 px-3",
        { "pr-7": e.showClear },
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus:outline-none focus:shadow-none",
        // Filled State *for FloatLabel
        { filled: ((s = t.instance) == null ? void 0 : s.$name) == "FloatLabel" && e.modelValue !== null },
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md"
    ]
  },
  list: {
    class: "flex flex-col list-none p-0 m-0 gap-[2px] min-w-full"
  },
  option: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Spacing
      "first:mt-0 mt-[2px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  optionContent: {
    class: [
      "relative",
      "leading-[normal]",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  groupIcon: {
    class: [
      // Alignment
      "ml-auto"
    ]
  },
  optionList: {
    class: [
      "min-w-full",
      // Spacing
      "p-1",
      "m-0",
      "list-none",
      // Shape
      "shadow-none sm:shadow-md",
      "rounded-md",
      "border border-surface-200 dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Bi = {
  root: {
    class: [
      "relative",
      // Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-5",
      "h-5",
      // Misc
      "cursor-pointer",
      "select-none"
    ]
  },
  box: ({ props: e, context: t }) => ({
    class: [
      // Alignment
      "flex",
      "items-center",
      "justify-center",
      // Size
      "w-5",
      "h-5",
      // Shape
      "rounded",
      "border",
      // Colors
      {
        "border-surface-300 dark:border-surface-700": !t.checked && !e.invalid,
        "bg-surface-0 dark:bg-surface-950": !t.checked && !e.invalid && !e.disabled,
        "border-secondary-400 bg-secondary-400": t.checked
      },
      // Invalid State
      "invalid:focus:ring-danger-400",
      "invalid:hover:border-danger-400",
      { "border-danger-400 dark:border-danger-400": e.invalid },
      // States
      {
        "peer-hover:border-surface-400 dark:peer-hover:border-surface-600": !e.disabled && !t.checked && !e.invalid,
        "peer-hover:bg-primary-emphasis peer-hover:border-primary-emphasis": !e.disabled && t.checked,
        "peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-secondary-200": !e.disabled,
        "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
      },
      { "[&>svg]:text-primary-contrast [&>svg]:w-[0.875rem] [&>svg]:h-[0.875rem]": t.checked },
      // Transitions
      "transition-colors",
      "duration-200"
    ]
  }),
  input: {
    class: [
      "peer",
      // Size
      "w-full ",
      "h-full",
      // Position
      "absolute",
      "top-0 left-0",
      "z-10",
      // Spacing
      "p-0",
      "m-0",
      // Shape
      "opacity-0",
      "rounded",
      "outline-none",
      "border border-surface-300 dark:border-surface-700",
      // Misc
      "appearance-none",
      "cursor-pointer"
    ]
  },
  icon: ({ context: e, state: t }) => ({
    class: [
      // Size
      "w-[0.875rem]",
      "h-[0.875rem]",
      // Colors
      {
        "text-primary-contrast": e.checked,
        "text-primary": t.d_indeterminate
      },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  })
}, Di = {
  root: {
    class: [
      // Flexbox
      "inline-flex items-center",
      // Spacing
      "px-3 py-1 gap-2",
      // Shape
      "rounded-[16px]",
      // Colors
      "text-surface-700 dark:text-white",
      "bg-surface-100 dark:bg-surface-700"
    ]
  },
  label: {
    class: "leading-6 m-0"
  },
  icon: {
    class: "leading-6 mr-2"
  },
  image: {
    class: ["w-8 h-8 -ml-2 mr-2", "rounded-full"]
  },
  removeIcon: {
    class: [
      "inline-block",
      // Shape
      "rounded-md leading-6",
      // Size
      "w-4 h-4",
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer"
    ]
  }
}, Hi = {
  root: ({ props: e }) => ({
    class: [
      // Display
      "inline-block",
      // Misc
      { "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  preview: {
    class: [
      // Font
      "text-base leading-none",
      // Spacing
      "m-0",
      "p-0",
      //Size
      "w-6 h-6",
      // Shape
      "rounded-md",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-700",
      // States
      "hover:border-surface-400 dark:hover:border-surface-600",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      // Transition
      "transition-colors duration-200",
      // Misc
      "cursor-pointer"
    ]
  },
  panel: ({ props: e }) => ({
    class: [
      // Position & Size
      {
        "relative h-[166px] w-[193px]": e.inline,
        "absolute h-[166px] w-[193px]": !e.inline
      },
      // Shape
      "shadow-md border",
      // Colors
      "bg-surface-800 dark:bg-surface-900 border-surface-600 dark:border-surface-700"
    ]
  }),
  colorSelector: {
    class: [
      // Position
      "absolute top-[8px] left-[8px]",
      // Size
      "h-[150px] w-[150px]"
    ]
  },
  colorbackground: {
    class: [
      // Size
      "h-[150px] w-[150px]"
    ],
    style: "background:linear-gradient(to top,#000 0%,rgba(0,0,0,0) 100%),linear-gradient(to right,#fff 0%,rgba(255,255,255,0) 100%)"
  },
  colorHandle: {
    class: [
      "absolute",
      // Shape
      "rounded-full border border-solid",
      // Size
      "h-[10px] w-[10px]",
      // Spacing
      "-ml-[5px] -mt-[5px]",
      // Colors
      "border-white",
      // Misc
      "cursor-pointer opacity-85"
    ]
  },
  hue: {
    class: [
      // Position
      "absolute top-[8px] left-[167px]",
      // Size
      "h-[150px] w-[17px]",
      // Opacity
      "opacity-85"
    ],
    style: "background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)"
  },
  hueHandle: {
    class: [
      // Position
      "absolute left-0 -ml-[2px] -mt-[5px]",
      // Size
      "h-[10px] w-[21px]",
      // Shape
      "border-solid border-2",
      // Misc
      "cursor-pointer opacity-85"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Ui = {
  icon: "w-8 h-8 text-[2rem] mr-2"
}, Ki = {
  root: {
    class: [
      // Shape
      "rounded-lg",
      "shadow-lg",
      "border-0",
      // Positioning
      "z-40 transform origin-center",
      "mt-3 absolute left-0 top-0",
      '[&[data-p-confirmpopup-flipped="true"]]:mb-3 [&[data-p-confirmpopup-flipped="true"]]:-mt-3',
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      // Before: Arrow
      "before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[10px] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700",
      "after:absolute after:w-0 after:-top-[0.54rem] after:left-[4px] after:h-0 after:border-transparent after:border-solid after:ml-[8px] after:border-x-[8px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900",
      // Flipped: Arrow
      '[&[data-p-confirmpopup-flipped="true"]]:before:-bottom-3 [&[data-p-confirmpopup-flipped="true"]]:before:top-auto [&[data-p-confirmpopup-flipped="true"]]:before:border-b-0 [&[data-p-confirmpopup-flipped="true"]]:before:border-t-[10px] [&[data-p-confirmpopup-flipped="true"]]:before:border-t-surface-200 dark:[&[data-p-confirmpopup-flipped="true"]]:before:border-t-surface-700',
      '[&[data-p-confirmpopup-flipped="true"]]:after:-bottom-[0.54rem] [&[data-p-confirmpopup-flipped="true"]]:after:top-auto [&[data-p-confirmpopup-flipped="true"]]:after:border-b-0 [&[data-p-confirmpopup-flipped="true"]]:after:border-t-[8px] [&[data-p-confirmpopup-flipped="true"]]:after:border-t-surface-0 dark:[&[data-p-confirmpopup-flipped="true"]]:after:border-t-surface-900'
    ]
  },
  content: {
    class: ["p-4 items-center flex", "rounded-t-lg", "border-x border-t last:border-b border-surface-200 dark:border-surface-700"]
  },
  icon: {
    class: "text-2xl mr-4"
  },
  footer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-end",
      "shrink-0",
      "text-right",
      "gap-2",
      // Spacing
      "px-4",
      "pb-4",
      // Shape
      "border-t-0",
      "rounded-b-lg",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      "border-x border-b border-surface-200 dark:border-surface-700"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Gi = {
  root: {
    class: [
      // Sizing and Shape
      "min-w-[12.5rem]",
      "rounded-md",
      "shadow-md",
      // Spacing
      "p-1",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  rootList: {
    class: [
      // Spacings and Shape
      "flex flex-col",
      "list-none",
      "m-0",
      "p-0",
      "outline-none"
    ]
  },
  item: {
    class: "relative my-[2px] [&:first-child]:mt-0"
  },
  itemContent: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  itemIcon: {
    class: [
      // Spacing
      "mr-2"
    ]
  },
  itemLabel: {
    class: ["leading-none"]
  },
  submenu: ({ props: e }) => ({
    class: [
      "flex flex-col",
      // Size
      "w-full sm:w-48",
      // Spacing
      "p-1",
      "m-0",
      "list-none",
      // Shape
      "shadow-md",
      "rounded-md",
      "dark:border dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      { "sm:absolute sm:left-full sm:top-0": e.level > 1 },
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  }),
  submenuIcon: {
    class: ["ml-auto"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-700"
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-250"
  }
}, Wi = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      { "flex flex-col": e.scrollable && e.scrollHeight === "flex" },
      // Size
      { "h-full": e.scrollable && e.scrollHeight === "flex" }
    ]
  }),
  mask: {
    class: [
      // Position
      "absolute",
      "top-0 left-0",
      "z-20",
      // Flex & Alignment
      "flex items-center justify-center",
      // Size
      "w-full h-full",
      // Color
      "bg-surface-100/40 dark:bg-surface-900/40",
      // Transition
      "transition duration-200"
    ]
  },
  loadingIcon: {
    class: "w-8 h-8 animate-spin"
  },
  tableContainer: ({ props: e }) => ({
    class: [
      { relative: e.scrollable, "flex flex-col grow": e.scrollable && e.scrollHeight === "flex" },
      // Size
      { "h-full": e.scrollable && e.scrollHeight === "flex" }
    ]
  }),
  header: ({ props: e }) => ({
    class: [
      "font-bold",
      // Shape
      e.showGridlines ? "border-x border-t border-b-0" : "border-y border-x-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  }),
  table: {
    class: "w-full border-spacing-0 border-separate"
  },
  thead: ({ context: e }) => ({
    class: [
      {
        "bg-surface-0 dark:bg-surface-900 top-0 z-40 sticky": e.scrollable
      }
    ]
  }),
  tbody: ({ instance: e, context: t }) => ({
    class: [
      {
        "sticky z-20": e.frozenRow && t.scrollable
      },
      "bg-surface-0 dark:bg-surface-800"
    ]
  }),
  tfoot: ({ context: e }) => ({
    class: [
      {
        "bg-surface-0 bottom-0 z-0": e.scrollable
      }
    ]
  }),
  footer: {
    class: [
      "font-bold",
      // Shape
      "border-t-0 border-b border-x-0 dark:border-b-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  },
  column: {
    headerCell: ({ context: e, props: t }) => ({
      class: [
        "font-semibold dark:font-normal",
        "leading-[normal]",
        // Position
        { "sticky z-20 border-b": t.frozen || t.frozen === "" },
        { relative: e.resizable },
        // Alignment
        "text-left",
        // Shape
        { "first:border-l border-y border-r": e == null ? void 0 : e.showGridlines },
        "border-x-0 border-y-2 border-solid",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
        // Color
        (t.sortable === "" || t.sortable) && e.sorted ? "bg-highlight" : "bg-surface-50 text-surface-700 dark:text-surface-0/50 dark:bg-surface-800/50",
        "border-surface-200 dark:border-surface-900",
        // States
        { "hover:bg-surface-100 dark:hover:bg-surface-800/50": (t.sortable === "" || t.sortable) && !(e != null && e.sorted) },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        { "transition duration-200": t.sortable === "" || t.sortable },
        // Misc
        { "cursor-pointer": t.sortable === "" || t.sortable },
        {
          "overflow-hidden whitespace-nowrap border-y bg-clip-padding": e == null ? void 0 : e.resizable
          // Resizable
        }
      ]
    }),
    columnHeaderContent: {
      class: "flex items-center gap-2"
    },
    sort: ({ context: e }) => ({
      class: [e.sorted ? "text-primary-500" : "text-surface-700", e.sorted ? "dark:text-primary-400" : "dark:text-white/80"]
    }),
    bodyCell: ({ props: e, context: t, state: r, parent: n }) => {
      var o, s, a;
      return {
        class: [
          // Font
          "leading-[normal]",
          //Position
          { "sticky box-border border-b": n.instance.frozenRow },
          { "sticky box-border border-b z-20": e.frozen || e.frozen === "" },
          // Alignment
          "text-left",
          // Shape
          "border-0 border-b dark:border-b-0 border-solid",
          { "first:border-l border-r border-b": t == null ? void 0 : t.showGridlines },
          { "bg-surface-0 dark:bg-surface-900": n.instance.frozenRow || e.frozen || e.frozen === "" },
          // Spacing
          { "py-[0.375rem] px-2": (t == null ? void 0 : t.size) === "small" && !r.d_editing },
          { "py-[0.9375rem] px-5": (t == null ? void 0 : t.size) === "large" && !r.d_editing },
          { "py-3 px-4": (t == null ? void 0 : t.size) !== "large" && (t == null ? void 0 : t.size) !== "small" && !r.d_editing },
          { "py-[0.6rem] px-2": r.d_editing },
          // Color
          "border-surface-200 dark:border-surface-700",
          {
            "overflow-hidden whitespace-nowrap border-y bg-clip-padding": (a = (s = (o = n.instance) == null ? void 0 : o.$parentInstance) == null ? void 0 : s.$parentInstance) == null ? void 0 : a.resizableColumns
            // Resizable
          }
        ]
      };
    },
    footerCell: ({ context: e }) => ({
      class: [
        // Font
        "font-bold",
        // Alignment
        "text-left",
        // Shape
        "border-0 border-b border-solid",
        { "border-x border-y": e == null ? void 0 : e.showGridlines },
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "p-2" : (e == null ? void 0 : e.size) === "large" ? "p-5" : "p-4",
        // Color
        "border-surface-200 dark:border-surface-700",
        "text-surface-700 dark:text-white/80",
        "bg-surface-0 dark:bg-surface-900"
      ]
    }),
    sortIcon: ({ context: e }) => ({
      class: ["ml-2", e.sorted ? "text-inherit" : "text-surface-700 dark:text-white/70"]
    }),
    columnFilter: {
      class: "inline-flex items-center ml-auto font-normal"
    },
    filterOverlay: {
      class: [
        "flex flex-col gap-2",
        // Position
        "absolute top-0 left-0",
        // Shape
        "border-0 dark:border",
        "rounded-md",
        "shadow-md",
        // Size
        "min-w-[12.5rem]",
        // Color
        "bg-surface-0 dark:bg-surface-900",
        "text-surface-800 dark:text-white/80",
        "dark:border-surface-700"
      ]
    },
    filterConstraintList: {
      class: "m-0 p-0 py-3 list-none"
    },
    filterConstraint: ({ context: e }) => ({
      class: [
        // Font
        "font-normal",
        "leading-none",
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-3 px-5",
        // Color
        { "text-surface-700 dark:text-white/80": !(e != null && e.highlighted) },
        { "bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80": !(e != null && e.highlighted) },
        { "bg-highlight": e == null ? void 0 : e.highlighted },
        //States
        { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !(e != null && e.highlighted) },
        { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": !(e != null && e.highlighted) },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transitions
        "transition-shadow",
        "duration-200",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    }),
    filterOperator: {
      class: [
        // Shape
        "rounded-t-md",
        // Color
        "text-surface-700 dark:text-white/80",
        "bg-surface-0 dark:bg-surface-700",
        "[&>[data-pc-name=pcfilteroperatordropdown]]:w-full"
      ]
    },
    filter: ({ instance: e }) => ({
      class: [{ "flex items-center w-full gap-2": e.display === "row", "inline-flex ml-auto": e.display === "menu" }]
    }),
    filterRule: "flex flex-col gap-2",
    filterButtonbar: "flex items-center justify-between p-0",
    filterAddButtonContainer: "[&>[data-pc-name=pcfilteraddrulebutton]]:w-full",
    rowToggleButton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",
        // Spacing
        "m-0 p-0",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-500 dark:text-white/70",
        "bg-transparent",
        "focus-visible:outline-none focus-visible:outline-offset-0",
        "focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    columnResizer: {
      class: [
        "block",
        // Position
        "absolute top-0 right-0",
        // Sizing
        "w-2 h-full",
        // Spacing
        "m-0 p-0",
        // Color
        "border border-transparent",
        // Misc
        "cursor-col-resize"
      ]
    },
    transition: {
      class: "p-4 flex flex-col gap-2",
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  bodyRow: ({ context: e, props: t, parent: r }) => ({
    class: [
      // Color
      { "bg-highlight": e.selected },
      { "bg-surface-0 text-surface-600 dark:text-white/80 dark:bg-surface-900": !e.selected },
      { "font-bold bg-surface-0 dark:bg-surface-900 z-20": t.frozenRow },
      { "odd:bg-surface-0 odd:text-surface-600 dark:odd:text-surface-0 dark:even:text-surface-0 dark:odd:bg-surface-800 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-900": e.stripedRows },
      // State
      { "hover:bg-surface-300/20 dark:hover:bg-surface-700/50": t.selectionMode && !e.selected || r.instance.rowHover },
      // Transition
      { "transition duration-200": t.selectionMode && !e.selected || t.rowHover },
      // Misc
      { "cursor-pointer": t.selectionMode || r.instance.rowHover }
    ]
  }),
  rowExpansion: {
    class: "bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-white/80"
  },
  rowGroupHeader: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-900"]
  },
  rowGroupFooter: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-900"]
  },
  rowToggleButton: {
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      "text-left",
      // Spacing
      "m-0 p-0",
      // Size
      "w-8 h-8",
      // Shape
      "border-0 rounded-full",
      // Color
      "text-surface-500 dark:text-white/70",
      "bg-transparent",
      "focus-visible:outline-none focus-visible:outline-offset-0",
      "focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transition
      "transition duration-200",
      // Misc
      "overflow-hidden",
      "cursor-pointer select-none"
    ]
  },
  rowToggleIcon: {
    class: "inline-block w-4 h-4"
  },
  columnResizeIndicator: {
    class: "absolute hidden w-[2px] z-20 bg-primary"
  }
}, qi = {
  content: {
    class: [
      // Spacing
      "p-0",
      // Shape
      "border-0",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  header: {
    class: [
      "font-semibold",
      // Spacing
      "py-3 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-00 dark:bg-surface-900",
      "border-b border-surface-200 dark:border-surface-700"
    ]
  }
}, To = {
  root: ({ props: e }) => ({
    class: [
      // Display and Position
      {
        flex: e.fluid,
        "inline-flex": !e.fluid
      },
      "max-w-full",
      "relative"
    ]
  }),
  pcInput: ({ props: e, parent: t }) => {
    var r;
    return {
      root: {
        class: [
          // Display
          "flex-auto w-[1%]",
          // Font
          "leading-none",
          // Colors
          "text-surface-600 dark:text-surface-200",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          { "bg-surface-0 dark:bg-surface-950": !e.disabled },
          "border",
          { "border-surface-300 dark:border-surface-600": !e.invalid },
          // Invalid State
          "invalid:focus:ring-red-200",
          "invalid:hover:border-red-500",
          { "border-red-500 dark:border-red-400": e.invalid },
          // Spacing
          "m-0 py-2 px-3",
          // Shape
          "appearance-none",
          { "rounded-md": !e.showIcon || e.iconDisplay == "input" },
          { "rounded-l-md  flex-1 pr-9": e.showIcon && e.iconDisplay !== "input" },
          { "rounded-md flex-1 pr-9": e.showIcon && e.iconDisplay === "input" },
          // Transitions
          "transition-colors",
          "duration-200",
          // States
          {
            "hover:border-surface-400 dark:hover:border-surface-600": !e.disabled && !e.invalid,
            "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10": !e.disabled,
            "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
          },
          // Filled State *for FloatLabel
          { filled: ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel" && e.modelValue !== null }
        ]
      }
    };
  },
  dropdownIcon: {
    class: ["absolute top-1/2 -mt-2", "text-surface-600 dark:text-surface-200", "right-3"]
  },
  dropdown: {
    class: [
      "relative",
      // Alignments
      "items-center inline-flex text-center align-bottom justify-center",
      // Shape
      "rounded-r-md",
      // Size
      "py-2 px-0",
      "w-10",
      "leading-[normal]",
      // Colors
      "border border-l-0 border-surface-300 dark:border-surface-600",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      "hover:bg-primary-hover hover:border-primary-hover",
      "focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  inputIconContainer: "absolute cursor-pointer top-1/2 right-3 -mt-3",
  inputIcon: "inline-block text-base",
  panel: ({ props: e }) => ({
    class: [
      // Display & Position
      {
        absolute: !e.inline,
        "inline-block": e.inline
      },
      // Size
      { "w-auto p-3 ": !e.inline },
      { "min-w-[80vw] w-auto p-3 ": e.touchUI },
      { "p-3 min-w-full": e.inline },
      // Shape
      "border rounded-lg",
      {
        "shadow-md": !e.inline
      },
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      //misc
      { "overflow-x-auto": e.inline }
    ]
  }),
  header: {
    class: [
      //Font
      "font-medium",
      // Flexbox and Alignment
      "flex items-center justify-between",
      // Spacing
      "p-0 pb-2",
      "m-0",
      // Shape
      "border-b",
      "rounded-t-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  title: {
    class: [
      // Text
      "leading-7",
      "mx-auto my-0"
    ]
  },
  selectMonth: {
    class: [
      // Font
      "text-base leading-[normal]",
      "font-medium",
      //shape
      "rounded-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      // Transitions
      "transition duration-200",
      // Spacing
      "p-1",
      "m-0 mr-2",
      // States
      "hover:text-primary-500 dark:hover:text-primary-400",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      // Misc
      "cursor-pointer"
    ]
  },
  selectYear: {
    class: [
      // Font
      "text-base leading-[normal]",
      "font-medium",
      //shape
      "rounded-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      // Transitions
      "transition duration-200",
      // Spacing
      "p-1",
      "m-0 mr-2",
      // States
      "hover:text-primary-500 dark:hover:text-primary-400",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      // Misc
      "cursor-pointer"
    ]
  },
  table: {
    class: [
      // Font
      "text-base leading-[normal]",
      // Size & Shape
      "border-collapse",
      "w-full",
      // Spacing
      "m-0 mt-2"
    ]
  },
  tableHeaderCell: {
    class: [
      // Spacing
      "p-1",
      "font-medium"
    ]
  },
  weekHeader: {
    class: ["leading-5", "text-surface-600 dark:text-white/70", "opacity-60 cursor-default"]
  },
  weekNumber: {
    class: ["text-surface-600 dark:text-white/70", "opacity-60 cursor-default"]
  },
  weekday: {
    class: [
      // Colors
      "text-surface-500 dark:text-white/60",
      "p-1"
    ]
  },
  dayCell: {
    class: [
      // Spacing
      "p-1"
    ]
  },
  weekLabelContainer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",
      // Shape & Size
      "w-8 h-8",
      "rounded-full",
      "border-transparent border",
      "leading-[normal]",
      // Colors
      "opacity-60 cursor-default"
    ]
  },
  dayView: "w-full",
  day: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",
      // Shape & Size
      "w-8 h-8",
      "rounded-full",
      "border-transparent border",
      "leading-[normal]",
      // Colors
      {
        "bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-white/70": e.date.today && !e.selected && !e.disabled,
        "bg-transparent text-surface-600 dark:text-white/70": !e.selected && !e.disabled && !e.date.today,
        "bg-highlight": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      {
        "hover:bg-surface-50 dark:hover:bg-surface-500/10": !e.selected && !e.disabled
      },
      {
        "opacity-60 cursor-default": e.disabled,
        "cursor-pointer": !e.disabled
      }
    ]
  }),
  monthView: {
    class: [
      // Spacing
      "mt-2"
    ]
  },
  month: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "w-1/3",
      "p-1",
      // Shape
      "rounded-md",
      // Colors
      {
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled,
        "bg-highlight": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.selected && !e.disabled
      },
      // Misc
      "cursor-pointer"
    ]
  }),
  yearView: {
    class: [
      // Spacing
      "mt-2"
    ]
  },
  year: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "w-1/2",
      "p-1",
      // Shape
      "rounded-md",
      // Colors
      {
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled,
        "bg-highlight": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.selected && !e.disabled
      },
      // Misc
      "cursor-pointer"
    ]
  }),
  timePicker: {
    class: [
      // Flexbox
      "flex",
      "justify-center items-center",
      // Borders
      "border-t-1",
      "border-solid border-surface-200",
      // Spacing
      "pt-2 mt-2"
    ]
  },
  separatorContainer: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  separator: {
    class: [
      // Text
      "text-xl"
    ]
  },
  hourPicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  minutePicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  secondPicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  ampmPicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  calendarContainer: "flex",
  calendar: "flex-auto border-l first:border-l-0 border-surface-200",
  buttonbar: {
    class: [
      // Flexbox
      "flex justify-between items-center",
      // Spacing
      "pt-2",
      // Shape
      "border-t border-surface-200 dark:border-surface-700"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Zi = {
  root: {}
}, Yi = {
  root: ({ state: e }) => ({
    class: [
      // Shape
      "rounded-lg",
      "shadow-lg",
      "border-0",
      // Size
      "max-h-[90vh]",
      "m-0",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "[&:last-child]:border-b",
      "border-surface-200 dark:border-surface-700",
      // Transitions
      "transform",
      "scale-100",
      // Maximized State
      {
        "transition-none": e.maximized,
        "transform-none": e.maximized,
        "!w-screen": e.maximized,
        "!h-screen": e.maximized,
        "!max-h-full": e.maximized,
        "!top-0": e.maximized,
        "!left-0": e.maximized
      }
    ]
  }),
  header: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-between",
      "shrink-0",
      // Spacing
      "p-6",
      // Shape
      "rounded-tl-lg",
      "rounded-tr-lg",
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "border border-b-0",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  title: {
    class: ["font-semibold text-xl leading-[normal]"]
  },
  headerActions: {
    class: ["flex items-center"]
  },
  content: ({ state: e, instance: t }) => ({
    class: [
      // Spacing
      "px-6",
      "pb-6",
      "pt-0",
      // Shape
      {
        grow: e.maximized,
        "rounded-bl-lg": !t.$slots.footer,
        "rounded-br-lg": !t.$slots.footer
      },
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "border border-t-0 border-b-0",
      "border-surface-200 dark:border-surface-700",
      // Misc
      "overflow-y-auto"
    ]
  }),
  footer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-end",
      "shrink-0",
      "text-right",
      "gap-2",
      // Spacing
      "px-6",
      "pb-6",
      // Shape
      "border-t-0",
      "rounded-b-lg",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      "border border-t-0 border-b-0",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  mask: ({ props: e }) => ({
    class: [
      // Transitions
      "transition-all",
      "duration-300",
      { "p-5": e.position !== "full" },
      // Background and Effects
      { "has-[.mask-active]:bg-transparent bg-black/40": e.modal }
    ]
  }),
  transition: ({ props: e }) => e.position === "top" ? {
    enterFromClass: "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active"
  } : e.position === "bottom" ? {
    enterFromClass: "opacity-0 scale-75 translate-y-full mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active"
  } : e.position === "left" || e.position === "topleft" || e.position === "bottomleft" ? {
    enterFromClass: "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active"
  } : e.position === "right" || e.position === "topright" || e.position === "bottomright" ? {
    enterFromClass: "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active"
  } : {
    enterFromClass: "opacity-0 scale-75 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 mask-active"
  }
}, Ji = {
  root: ({ props: e }) => ({
    class: [
      // Flex and Position
      "flex relative",
      { "justify-center": e.layout == "vertical" },
      { "items-center": e.layout == "vertical" },
      {
        "justify-start": (e == null ? void 0 : e.align) == "left" && e.layout == "horizontal",
        "justify-center": (e == null ? void 0 : e.align) == "center" && e.layout == "horizontal",
        "justify-end": (e == null ? void 0 : e.align) == "right" && e.layout == "horizontal",
        "items-center": (e == null ? void 0 : e.align) == "top" && e.layout == "vertical",
        "items-start": (e == null ? void 0 : e.align) == "center" && e.layout == "vertical",
        "items-end": (e == null ? void 0 : e.align) == "bottom" && e.layout == "vertical"
      },
      // Spacing
      {
        "my-5 mx-0 py-0 px-5": e.layout == "horizontal",
        "mx-4 md:mx-5 py-5": e.layout == "vertical"
      },
      // Size
      {
        "w-full": e.layout == "horizontal",
        "min-h-full": e.layout == "vertical"
      },
      // Before: Line
      "before:block",
      // Position
      {
        "before:absolute before:left-0 before:top-1/2": e.layout == "horizontal",
        "before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2": e.layout == "vertical"
      },
      // Size
      {
        "before:w-full": e.layout == "horizontal",
        "before:min-h-full": e.layout == "vertical"
      },
      // Shape
      {
        "before:border-solid": e.type == "solid",
        "before:border-dotted": e.type == "dotted",
        "before:border-dashed": e.type == "dashed"
      },
      // Color
      {
        "before:border-t before:border-surface-200 before:dark:border-surface-600": e.layout == "horizontal",
        "before:border-l before:border-surface-200 before:dark:border-surface-600": e.layout == "vertical"
      }
    ]
  }),
  content: {
    class: [
      // Space and Position
      "px-1 z-10",
      // Color
      "bg-surface-0 dark:bg-surface-800"
    ]
  }
}, Qi = {
  root: ({ props: e }) => ({
    class: [
      // Positioning
      "absolute z-1",
      {
        "left-0 bottom-0 w-full": e.position == "bottom",
        "left-0 top-0 w-full": e.position == "top",
        "left-0 top-0 h-full": e.position == "left",
        "right-0 top-0 h-full": e.position == "right"
      },
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Interactivity
      "pointer-events-none"
    ]
  }),
  listContainer: {
    class: [
      // Flexbox
      "flex",
      // Shape & Border
      "rounded-md",
      // Color
      "bg-surface-0/10 dark:bg-surface-900/20 border border-surface-0/20",
      "backdrop-blur-sm",
      // Spacing
      "p-2",
      // Misc
      "pointer-events-auto"
    ]
  },
  list: ({ props: e }) => ({
    class: [
      // Flexbox & Alignment
      "flex items-center justify-center",
      {
        "flex-col": e.position == "left" || e.position == "right"
      },
      // List Style
      "m-0 p-0 list-none",
      // Shape
      "outline-none"
    ]
  }),
  item: ({ props: e, context: t, instance: r }) => ({
    class: [
      // Spacing & Shape
      "p-2 rounded-md",
      // Positioning & Hover States
      {
        "origin-bottom": e.position == "bottom",
        "origin-top": e.position == "top",
        "origin-left": e.position == "left",
        "origin-right": e.position == "right"
      },
      // Transitions & Transform
      "transition-all duration-200 ease-cubic-bezier-will-change-transform transform"
    ]
  }),
  itemLink: {
    class: [
      // Flexbox & Alignment
      "flex flex-col items-center justify-center",
      // Position
      "relative",
      // Size
      "w-16 h-16",
      // Misc
      "cursor-default overflow-hidden"
    ]
  }
}, Po = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex flex-col",
      // Position
      "relative",
      { "!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0": e.position == "full" },
      // Size
      {
        "h-full w-80": e.position == "left" || e.position == "right",
        "h-auto w-full": e.position == "top" || e.position == "bottom"
      },
      // Shape
      "border-0 dark:border",
      "shadow-lg",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "dark:border-surface-700",
      // Transitions
      "transition-transform",
      "duration-300",
      // Misc
      "pointer-events-auto"
    ]
  }),
  header: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-between",
      "shrink-0",
      // Spacing
      "p-[1.125rem]",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  title: {
    class: ["font-semibold text-xl"]
  },
  icons: {
    class: ["flex items-center"]
  },
  closeButton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-7 h-7",
      // Shape
      "border-0",
      "rounded-full",
      // Colors
      "text-surface-500",
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  },
  closeButtonIcon: {
    class: [
      // Display
      "inline-block",
      // Size
      "w-4",
      "h-4"
    ]
  },
  content: {
    class: [
      // Spacing and Size
      "p-[1.125rem]",
      "pt-0",
      "h-full",
      "w-full",
      // Growth and Overflow
      "grow",
      "overflow-y-auto"
    ]
  },
  mask: ({ props: e }) => ({
    class: [
      // Transitions
      "transition-all",
      "duration-300",
      { "p-5": e.position !== "full" },
      // Background and Effects
      { "has-[.mask-active]:bg-transparent bg-black/40": e.modal }
    ]
  }),
  transition: ({ props: e }) => e.position === "top" ? {
    enterFromClass: "translate-x-0 -translate-y-full translate-z-0 mask-active",
    leaveToClass: "translate-x-0 -translate-y-full translate-z-0 mask-active"
  } : e.position === "bottom" ? {
    enterFromClass: "translate-x-0 translate-y-full translate-z-0 mask-active",
    leaveToClass: "translate-x-0 translate-y-full translate-z-0 mask-active"
  } : e.position === "left" ? {
    enterFromClass: "-translate-x-full translate-y-0 translate-z-0 mask-active",
    leaveToClass: "-translate-x-full translate-y-0 translate-z-0 mask-active"
  } : e.position === "right" ? {
    enterFromClass: "translate-x-full translate-y-0 translate-z-0 mask-active",
    leaveToClass: "translate-x-full translate-y-0 translate-z-0 mask-active"
  } : {
    enterFromClass: "opacity-0 mask-active",
    enterActiveClass: "transition-opacity duration-400 ease-in",
    leaveActiveClass: "transition-opacity duration-400 ease-in",
    leaveToClass: "opacity-0 mask-active"
  }
}, Xi = {
  root: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",
      // Shape
      "rounded-md",
      // Color
      "border border-surface-200 dark:border-surface-700",
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  legend: ({ props: e }) => ({
    class: [
      // Font
      "font-semibold",
      "leading-none",
      //Spacing
      "p-0 mb-[0.375rem]",
      // Shape
      "rounded-md",
      // Color
      "text-surface-700 dark:text-surface-0/80",
      "bg-surface-0 dark:bg-surface-900",
      // Transition
      "transition-none",
      // States
      { "hover:bg-surface-100 dark:hover:bg-surface-800": e.toggleable }
    ]
  }),
  toggleButton: ({ props: e }) => ({
    class: [
      // Alignments
      "flex items-center justify-center",
      "relative",
      //Spacing
      { "py-2 px-3": e.toggleable },
      // Shape
      { "rounded-md": e.toggleable },
      // Color
      { "text-surface-700 dark:text-surface-200 hover:text-surface-900": e.toggleable },
      // States
      { "hover:text-surface-900 dark:hover:text-surface-100": e.toggleable },
      { "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300": e.toggleable },
      // Misc
      {
        "transition-none cursor-pointer overflow-hidden select-none": e.toggleable
      }
    ]
  }),
  toggleIcon: {
    class: "mr-2 inline-block"
  },
  legendLabel: ({ props: e }) => ({
    class: ["flex items-center justify-center leading-none", { "py-2 px-3": !e.toggleable }]
  }),
  content: {
    class: "p-0"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, el = {
  root: ({ props: e }) => ({
    class: [
      {
        "flex flex-wrap items-center justify-center gap-2": e.mode === "basic"
      }
    ]
  }),
  input: {
    class: "hidden"
  },
  header: {
    class: [
      // Flexbox
      "flex",
      "flex-wrap",
      // Colors
      "bg-surface-0",
      "dark:bg-surface-900",
      "text-surface-700",
      "dark:text-white/80",
      // Spacing
      "p-[1.125rem]",
      "gap-2",
      // Borders
      "border",
      "border-solid",
      "border-surface-200",
      "dark:border-surface-700",
      "border-b-0",
      // Shape
      "rounded-tr-lg",
      "rounded-tl-lg"
    ]
  },
  content: {
    class: [
      // Position
      "relative",
      // Colors
      "bg-surface-0",
      "dark:bg-surface-900",
      "text-surface-700",
      "dark:text-white/80",
      // Spacing
      "p-[1.125rem]",
      // Borders
      "border border-t-0",
      "border-surface-200",
      "dark:border-surface-700",
      // Shape
      "rounded-b-lg",
      //ProgressBar
      "[&>[data-pc-name=pcprogressbar]]:absolute",
      "[&>[data-pc-name=pcprogressbar]]:w-full",
      "[&>[data-pc-name=pcprogressbar]]:top-0",
      "[&>[data-pc-name=pcprogressbar]]:left-0",
      "[&>[data-pc-name=pcprogressbar]]:h-1"
    ]
  },
  file: {
    class: [
      // Flexbox
      "flex",
      "items-center",
      "flex-wrap",
      // Spacing
      "p-4",
      "mb-2",
      "last:mb-0",
      // Borders
      "border",
      "border-surface-200",
      "dark:border-surface-700",
      "gap-2",
      // Shape
      "rounded"
    ]
  },
  fileThumbnail: "shrink-0",
  fileName: "mb-2 break-all",
  fileSize: "mr-2"
}, tl = {
  root: {
    class: [
      "block relative",
      // Base Label Appearance
      "[&>*:last-child]:text-surface-900/60 dark:[&>*:last-child]:text-white/60",
      "[&>*:last-child]:absolute",
      "[&>*:last-child]:left-3",
      "[&>*:last-child]:pointer-events-none",
      "[&>*:last-child]:transition-all",
      "[&>*:last-child]:duration-200",
      "[&>*:last-child]:ease",
      // Position for all labels except those following textarea
      "[&>:not(textarea)~label]:top-1/2 [&>:not(textarea)~label]:-translate-y-1/2 ",
      // Position for labels following textareas
      "[&>textarea~label]:top-4",
      // Focus Label Appearance
      "[&>*:last-child]:has-[:focus]:-top-3",
      "[&>*:last-child]:has-[:focus]:text-sm",
      "[&>*:last-child]:has-[:focus]:z-10",
      // Filled Input Label Appearance
      "[&>*:last-child]:has-[.filled]:-top-3",
      "[&>*:last-child]:has-[.filled]:text-sm",
      "[&>*:last-child]:has-[.filled]:z-10"
    ]
  }
}, rl = {
  content: ({ parent: e, props: t }) => ({
    class: [
      "flex",
      {
        "flex-col": t.fullScreen
      },
      {
        "flex-col": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "bottom",
        "flex-row": e.props.thumbnailsPosition === "right" || e.props.thumbnailsPosition === "left"
      }
    ]
  }),
  itemsContainer: ({ parent: e, props: t }) => ({
    class: [
      "group",
      "flex relative",
      {
        "grow shrink w-0 justify-center": t.fullScreen
      },
      {
        "flex-col": e.props.indicatorsPosition === "bottom" || e.props.indicatorsPosition === "top",
        "flex-row items-center": e.props.indicatorsPosition === "left" || e.props.indicatorsPosition === "right"
      },
      {
        "order-2": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "left",
        "flex-row": e.props.thumbnailsPosition === "right"
      }
    ]
  }),
  items: ({ parent: e }) => ({
    class: [
      "flex h-full relative",
      {
        "order-1": e.props.indicatorsPosition === "bottom" || e.props.indicatorsPosition === "right",
        "order-2": e.props.indicatorsPosition === "top" || e.props.indicatorsPosition === "left"
      }
    ]
  }),
  item: {
    class: [
      // Flex
      "flex justify-center items-center h-full w-full",
      // Sizing
      "h-full w-full"
    ]
  },
  thumbnails: ({ parent: e }) => ({
    class: [
      // Flex
      "flex flex-col shrink-0",
      {
        "order-1": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "left"
      },
      // Misc
      "overflow-auto"
    ]
  }),
  thumbnailContent: ({ parent: e }) => ({
    class: [
      // Flex
      "flex",
      // Spacing
      "py-4 px-1",
      // Colors
      "bg-black/90",
      {
        "flex-row": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "bottom",
        "flex-col grow": e.props.thumbnailsPosition === "right" || e.props.thumbnailsPosition === "left"
      }
    ]
  }),
  thumbnailPrevButton: {
    class: [
      // Positioning
      "self-center relative",
      // Display & Flexbox
      "flex shrink-0 justify-center items-center overflow-hidden",
      // Spacing
      "m-2",
      // Appearance
      "bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out",
      // Hover Effects
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  thumbnailsViewport: {
    class: "overflow-hidden w-full"
  },
  thumbnailItems: ({ parent: e }) => ({
    class: [
      "flex",
      {
        "flex-col h-full": e.props.thumbnailsPosition === "right" || e.props.thumbnailsPosition === "left"
      }
    ]
  }),
  thumbnailItem: ({ parent: e }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      "grow shrink-0",
      // Sizing
      {
        "w-full md:w-[25%] lg:w-[20%]": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "bottom"
      },
      // Misc
      "overflow-auto",
      "cursor-pointer",
      "opacity-50",
      // States
      '[&[data-p-active="true"]]:opacity-100',
      "hover:opacity-100",
      // Transitions
      "transition-opacity duration-300"
    ]
  }),
  thumbnailNextButton: {
    class: [
      // Positioning
      "self-center relative",
      // Display & Flexbox
      "flex shrink-0 justify-center items-center overflow-hidden",
      // Spacing
      "m-2",
      // Appearance
      "bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out",
      // Hover Effects
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  indicatorList: ({ parent: e }) => ({
    class: [
      // flex
      "flex items-center justify-center",
      // Spacing
      "p-4",
      // Indicators Position
      {
        "order-2": e.props.indicatorsPosition == "bottom",
        "order-1": e.props.indicatorsPosition == "top",
        "order-1 flex-col": e.props.indicatorsPosition == "left",
        "flex-col order-2": e.props.indicatorsPosition == "right"
      },
      {
        "absolute z-10 bg-black/50": e.props.showIndicatorsOnItem
      },
      {
        "bottom-0 left-0 w-full items-start": e.props.indicatorsPosition == "bottom" && e.props.showIndicatorsOnItem,
        "top-0 left-0 w-full items-start": e.props.indicatorsPosition == "top" && e.props.showIndicatorsOnItem,
        "left-0 top-0 h-full items-start": e.props.indicatorsPosition == "left" && e.props.showIndicatorsOnItem,
        "right-0 top-0 h-full items-start": e.props.indicatorsPosition == "right" && e.props.showIndicatorsOnItem
      }
    ]
  }),
  indicator: ({ parent: e }) => ({
    class: [
      {
        "mr-2": e.props.indicatorsPosition == "bottom" || e.props.indicatorsPosition == "top",
        "mb-2": e.props.indicatorsPosition == "left" || e.props.indicatorsPosition == "right"
      }
    ]
  }),
  indicatorButton: ({ context: e }) => ({
    class: [
      // Size
      "w-4 h-4",
      // Appearance
      "rounded-full transition duration-200",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Conditional Appearance: Not Highlighted
      { "bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600": !e.highlighted },
      // Conditional Appearance: Highlighted
      { "bg-primary hover:bg-primary-emphasis": e.highlighted }
    ]
  }),
  mask: {
    class: ["fixed top-0 left-0 w-full h-full", "flex items-center justify-center", "bg-black/90"]
  },
  closeButton: {
    class: [
      // Positioning
      "!absolute top-0 right-0",
      // Display & Flexbox
      "flex justify-center items-center overflow-hidden",
      // Spacing
      "m-2",
      // Appearance
      "text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out",
      // Hover Effect
      "hover:text-white hover:bg-surface-0/10",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  closeIcon: {
    class: "w-6 h-6"
  },
  prevButton: ({ parent: e }) => ({
    class: [
      // Display & Flexbox
      "inline-flex justify-center items-center overflow-hidden",
      // Appearance
      "bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md",
      {
        "opacity-0 group-hover:opacity-100": e.props.showItemNavigatorsOnHover
      },
      // Spacing
      "mx-2",
      // Positioning
      "top-1/2 mt-[-0.5rem] left-0",
      {
        "!absolute": !e.state.containerVisible && e.props.showItemNavigators,
        "!fixed": e.state.containerVisible
      },
      // Hover Effect
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  }),
  nextButton: ({ parent: e }) => ({
    class: [
      // Display & Flexbox
      "inline-flex justify-center items-center overflow-hidden",
      // Appearance
      "bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md",
      {
        "opacity-0 group-hover:opacity-100": e.props.showItemNavigatorsOnHover
      },
      // Spacing
      "mx-2",
      // Positioning
      "top-1/2 mt-[-0.5rem] right-0",
      {
        "!absolute": !e.state.containerVisible && e.props.showItemNavigators,
        "!fixed": e.state.containerVisible
      },
      // Hover Effect
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  }),
  caption: {
    class: [
      // Positioning
      "absolute bottom-0 left-0 w-full",
      // Appearance
      "bg-black/50 text-white p-4"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass: "transition-all duration-150 ease-in-out",
    leaveActiveClass: "transition-all duration-150 ease-in",
    leaveToClass: "opacity-0 scale-75"
  }
}, nl = {
  css: `
    *[data-pd-ripple="true"]{
        overflow: hidden;
        position: relative;
    }
    span[data-p-ink-active="true"]{
        animation: ripple 0.4s linear;
    }
    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }

    .progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progress-spinner-dash{
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progress-spinner-color {
        100%, 0% {
            stroke: #ff5757;
        }
        40% {
            stroke: #696cff;
        }
        66% {
            stroke: #1ea97c;
        }
        80%, 90% {
            stroke: #cc8925;
        }
    }

    .progressbar-value-animate::after {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }
    .progressbar-value-animate::before {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    .p-fadein {
        animation: p-fadein 250ms linear;
    }

    @keyframes p-fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`
}, ol = {
  root: {
    class: [
      "relative",
      "[&>[data-pc-name=inputicon]]:absolute",
      "[&>[data-pc-name=inputicon]]:top-1/2",
      "[&>[data-pc-name=inputicon]]:-mt-2",
      "[&>[data-pc-name=inputicon]]:text-surface-900/60 dark:[&>[data-pc-name=inputicon]]:text-white/60",
      "[&>[data-pc-name=inputicon]:first-child]:left-3",
      "[&>[data-pc-name=inputicon]:last-child]:right-3",
      "[&>[data-pc-name=inputtext]:first-child]:pr-10",
      "[&>[data-pc-name=inputtext]:last-child]:pl-10",
      // filter
      "[&>[data-pc-extend=inputicon]]:absolute",
      "[&>[data-pc-extend=inputicon]]:top-1/2",
      "[&>[data-pc-extend=inputicon]]:-mt-2",
      "[&>[data-pc-extend=inputicon]]:text-surface-900/60 dark:[&>[data-pc-extend=inputicon]]:text-white/60",
      "[&>[data-pc-extend=inputicon]:first-child]:left-3",
      "[&>[data-pc-extend=inputicon]:last-child]:right-3"
    ]
  }
}, sl = {
  root: {
    class: "relative inline-block"
  },
  previewMask: {
    class: [
      // Flexbox & Alignment
      "flex items-center justify-center",
      // Positioning
      "absolute",
      // Shape
      "inset-0 opacity-0 transition-opacity duration-300",
      // Color
      "bg-transparent text-surface-100",
      // States
      "hover:opacity-100 hover:cursor-pointer hover:bg-black/50 hover:bg-opacity-50"
    ]
  },
  mask: {
    class: [
      // Flexbox & Alignment
      "flex items-center justify-center",
      // Positioning
      "fixed top-0 left-0",
      // Sizing
      "w-full h-full",
      // Color
      "bg-black/90"
    ]
  },
  toolbar: {
    class: [
      // Flexbox
      "flex",
      // Positioning
      "absolute top-0 right-0",
      // Spacing
      "p-4"
    ]
  },
  rotateRightButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  rotateRightIcon: {
    class: "w-6 h-6"
  },
  rotateLeftButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  rotateLeftIcon: {
    class: "w-6 h-6"
  },
  zoomOutButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  zoomOutIcon: {
    class: "w-6 h-6"
  },
  zoomInButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  zoomInIcon: {
    class: "w-6 h-6"
  },
  closeButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  closeIcon: {
    class: "w-6 h-6"
  },
  transition: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass: "transition-all duration-150 ease-in-out",
    leaveActiveClass: "transition-all duration-150 ease-in",
    leaveToClass: "opacity-0 scale-75"
  }
}, al = {
  display: {
    class: [
      // Display
      "inline",
      // Spacing
      "px-3 py-2",
      // Shape
      "rounded-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      // States
      "hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-white/80",
      // Transitions
      "transition",
      "duration-200",
      // Misc
      "cursor-pointer"
    ]
  }
}, il = {
  root: {
    class: ["flex items-stretch", "w-full"]
  }
}, ll = {
  root: {
    class: [
      // Flex
      "flex items-center justify-center",
      // Shape
      "first:rounded-l-md",
      "last:rounded-r-md",
      "border-y",
      "last:border-r",
      "border-l",
      "border-r-0",
      // Space
      "p-2",
      // Size
      "min-w-[2.5rem]",
      // Color
      "bg-transparent dark:bg-surface-900",
      "text-surface-800 dark:text-white/80",
      "border-surface-300 dark:border-surface-700"
    ]
  }
}, cl = {
  pcinputtext: {
    root: ({ context: e, props: t, parent: r }) => {
      var n, o, s, a, i, l, c;
      return {
        class: [
          // Font
          "leading-none",
          // Spacing
          "m-0 py-2 px-3",
          // Colors
          "text-surface-800 dark:text-white/80",
          { "bg-surface-0 dark:bg-surface-950": !e.disabled },
          "border",
          { "border-surface-300 dark:border-surface-700": !t.invalid },
          // Invalid State
          "invalid:focus:ring-red-200",
          "invalid:hover:border-red-500",
          { "border-red-500 dark:border-red-400": t.invalid },
          // States
          {
            "hover:border-surface-400 dark:hover:border-surface-600": !e.disabled && !t.invalid,
            "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10": !e.disabled,
            "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
          },
          // Filled State *for FloatLabel
          {
            filled: ((n = r.instance) == null ? void 0 : n.$name) == "FloatLabel" && e.filled || ((s = (o = r.instance) == null ? void 0 : o.$parentInstance) == null ? void 0 : s.$name) == "FloatLabel" && r.props.modelValue !== null && ((a = r.props.modelValue) == null ? void 0 : a.length) !== 0
          },
          ((i = r.instance) == null ? void 0 : i.$name) == "FloatLabel" || ((c = (l = r.instance) == null ? void 0 : l.$parentInstance) == null ? void 0 : c.$name) == "FloatLabel" ? "placeholder:text-transparent dark:placeholder:text-transparent" : "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          // Misc
          "rounded-md",
          "appearance-none",
          "transition-colors duration-200"
        ]
      };
    }
  }
}, ul = {
  root: ({ props: e, parent: t }) => ({
    class: [
      // Flex
      "inline-flex",
      "relative",
      { "flex-col": e.showButtons && e.buttonLayout === "vertical" },
      { "flex-1 w-[1%]": t.instance.$name === "InputGroup" },
      { "w-full": e.fluid },
      // Shape
      { "first:rounded-l-md rounded-none last:rounded-r-md": t.instance.$name === "InputGroup" && !e.showButtons },
      { "border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-700": t.instance.$name === "InputGroup" && !e.showButtons },
      { "first:ml-0 -ml-px": t.instance.$name === "InputGroup" && !e.showButtons },
      //Sizing
      { "!w-16": e.showButtons && e.buttonLayout == "vertical" }
    ]
  }),
  pcInput: {
    root: ({ parent: e, context: t }) => {
      var r, n, o;
      return {
        class: [
          // Font
          "leading-none",
          // Display
          "flex-auto",
          { "w-[1%]": e.props.fluid },
          //Text
          { "text-center": e.props.showButtons && e.props.buttonLayout == "vertical" },
          // Spacing
          "py-2 px-3",
          "m-0",
          // Shape
          "rounded-md",
          { "rounded-l-none rounded-r-none": e.props.showButtons && e.props.buttonLayout === "horizontal" },
          { "rounded-none": e.props.showButtons && e.props.buttonLayout === "vertical" },
          { "border-0": ((r = e.instance.$parentInstance) == null ? void 0 : r.$name) === "InputGroup" && !e.props.showButtons },
          // Colors
          "text-surface-800 dark:text-white/80",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          { "bg-surface-0 dark:bg-surface-950": !t.disabled },
          "border",
          { "border-surface-300 dark:border-surface-700": !e.props.invalid },
          // Invalid State
          "invalid:focus:ring-danger-400",
          "invalid:hover:border-danger-400",
          { "border-red-500 dark:border-red-400": e.props.invalid },
          // States
          { "hover:border-secondary-400": !e.props.invalid },
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-secondary-500 dark:focus:ring-secondary-400 focus:z-10",
          { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": t.disabled },
          // Filled State *for FloatLabel
          { filled: ((o = (n = e.instance) == null ? void 0 : n.$parentInstance) == null ? void 0 : o.$name) === "FloatLabel" && e.state.d_modelValue !== null },
          //Position
          { "order-2": e.props.buttonLayout == "horizontal" || e.props.buttonLayout === "vertical" }
        ]
      };
    }
  },
  buttonGroup: ({ props: e }) => ({
    class: [
      "absolute",
      "z-20",
      // Flex
      "flex",
      "flex-col",
      "top-px right-px",
      { "h-[calc(100%-2px)]": e.showButtons && e.buttonLayout === "stacked" }
    ]
  }),
  incrementButton: ({ props: e }) => ({
    class: [
      // Display
      { "flex flex-initial shrink-0": e.showButtons && e.buttonLayout === "horizontal" },
      { "flex flex-auto": e.showButtons && e.buttonLayout === "stacked" },
      // Alignment
      "items-center",
      "justify-center",
      "text-center align-bottom",
      //Position
      "relative",
      { "order-3": e.showButtons && e.buttonLayout === "horizontal" },
      { "order-1": e.showButtons && e.buttonLayout === "vertical" },
      //Color
      "text-surface-800 dark:text-surface-0",
      "bg-transparent",
      { "dark:bg-surface-900": e.showButtons && e.buttonLayout !== "stacked" },
      "border border-surface-300 dark:border-surface-700",
      { "border-0": e.showButtons && e.buttonLayout === "stacked" },
      { "border-l-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "horizontal" },
      { "border-b-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "vertical" },
      // Sizing
      "w-[3rem]",
      { "px-3 py-2": e.showButtons && e.buttonLayout !== "stacked" },
      { "p-0": e.showButtons && e.buttonLayout === "stacked" },
      { "w-full": e.showButtons && e.buttonLayout === "vertical" },
      // Shape
      "rounded-md",
      { "rounded-md": e.showButtons && e.buttonLayout == "stacked" },
      { "rounded-bl-none rounded-tl-none": e.showButtons && e.buttonLayout === "horizontal" },
      { "rounded-bl-none rounded-br-none": e.showButtons && e.buttonLayout === "vertical" },
      //States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      //Misc
      "cursor-pointer overflow-hidden select-none"
    ]
  }),
  incrementIcon: "inline-block w-4 h-4",
  decrementButton: ({ props: e }) => ({
    class: [
      // Display
      { "flex flex-initial shrink-0": e.showButtons && e.buttonLayout === "horizontal" },
      { "flex flex-auto": e.showButtons && e.buttonLayout === "stacked" },
      // Alignment
      "items-center",
      "justify-center",
      "text-center align-bottom",
      //Position
      "relative",
      { "order-1": e.showButtons && e.buttonLayout === "horizontal" },
      { "order-3": e.showButtons && e.buttonLayout === "vertical" },
      //Color
      "text-surface-800 dark:text-surface-0",
      "bg-transparent",
      { "dark:bg-surface-900": e.showButtons && e.buttonLayout !== "stacked" },
      "border border-surface-300 dark:border-surface-700",
      { "border-0": e.showButtons && e.buttonLayout === "stacked" },
      { "border-r-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "horizontal" },
      { "border-t-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "vertical" },
      // Sizing
      "w-[3rem]",
      { "px-3 py-2": e.showButtons && e.buttonLayout !== "stacked" },
      { "p-0": e.showButtons && e.buttonLayout === "stacked" },
      { "w-full": e.showButtons && e.buttonLayout === "vertical" },
      // Shape
      "rounded-md",
      { "rounded-tr-none rounded-tl-none rounded-bl-none": e.showButtons && e.buttonLayout === "stacked" },
      { "rounded-tr-none rounded-br-none ": e.showButtons && e.buttonLayout === "horizontal" },
      { "rounded-tr-none rounded-tl-none ": e.showButtons && e.buttonLayout === "vertical" },
      //States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      //Misc
      "cursor-pointer overflow-hidden select-none"
    ]
  }),
  decrementIcon: "inline-block w-4 h-4"
}, dl = {
  root: {
    class: [
      // Alignment
      "flex items-center",
      "gap-2",
      "[&_[data-pc-name^=pcinput]]:w-10"
    ]
  }
}, fl = {
  root: ({ props: e, context: t, parent: r }) => {
    var n, o, s, a;
    return {
      class: [
        // Font
        "leading-none",
        // Flex
        { "flex-1 w-[1%]": r.instance.$name == "InputGroup" },
        // Spacing
        "m-0",
        { "w-full": e.fluid },
        // Size
        {
          "py-3 px-3.5": e.size == "large",
          "py-1.5 px-2": e.size == "small",
          "py-2 px-3": e.size == null
        },
        // Shape
        { "rounded-md": r.instance.$name !== "InputGroup" },
        { "first:rounded-l-md rounded-none last:rounded-r-md": r.instance.$name == "InputGroup" },
        { "border-0 border-y border-l last:border-r": r.instance.$name == "InputGroup" },
        { "first:ml-0 -ml-px": r.instance.$name == "InputGroup" && !e.showButtons },
        // Colors
        "text-surface-800 dark:text-white/80",
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        { "bg-surface-0 dark:bg-surface-950": !t.disabled },
        "border",
        { "border-surface-300 dark:border-surface-700": !e.invalid },
        // Invalid State
        "invalid:focus:ring-danger-400",
        "invalid:hover:border-danger-400",
        { "border-danger-400 dark:border-danger-400": e.invalid },
        // States
        {
          "hover:border-surface-400 dark:hover:border-surface-600": !t.disabled && !e.invalid,
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-secondary-500 dark:focus:ring-secondary-400 focus:z-10": !t.disabled,
          "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": t.disabled
        },
        // Filled State *for FloatLabel
        { filled: ((n = r.instance) == null ? void 0 : n.$name) == "FloatLabel" && t.filled || ((s = (o = r.instance) == null ? void 0 : o.$parentInstance) == null ? void 0 : s.$name) == "FloatLabel" && r.props.modelValue !== null && ((a = r.props.modelValue) == null ? void 0 : a.length) !== 0 },
        // Misc
        "appearance-none",
        "transition-colors duration-200"
      ]
    };
  }
}, pl = {
  root: ({ props: e }) => ({
    class: [
      // Misc
      { "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  range: {
    class: [
      // Stroke
      "stroke-current",
      // Color
      "stroke-surface-200 dark:stroke-surface-700",
      // Fill
      "fill-none",
      // Transition
      "transition duration-100 ease-in"
    ]
  },
  value: {
    class: [
      // Animation
      "animate-dash-frame",
      // Color
      "stroke-primary",
      // Fill
      "fill-none"
    ]
  },
  text: {
    class: [
      // Text Style
      "text-center text-xl",
      // Color
      "fill-surface-600 dark:fill-surface-200"
    ]
  }
}, ml = {
  root: ({ props: e }) => ({
    class: [
      "rounded-md",
      // Colors
      { "bg-surface-0 dark:bg-surface-900": !e.disabled },
      "text-surface-700 dark:text-white/80",
      "border",
      { "border-surface-300 dark:border-surface-700": !e.invalid },
      // Disabled State
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled },
      // Invalid State
      { "border-red-500 dark:border-red-400": e.invalid }
    ]
  }),
  listContainer: "overflow-auto",
  list: {
    class: "p-1 list-none m-0 outline-none"
  },
  option: ({ context: e, props: t }) => ({
    class: [
      "relative",
      // Flex
      "flex items-center",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected && !t.checkmark,
        "bg-surface-0 dark:bg-surface-900": t.checkmark && e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected || t.checkmark && e.selected },
      { "hover:bg-highlight-emphasis": e.selected && !t.checkmark },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  optionCheckIcon: "relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  header: {
    class: [
      // Spacing
      "pt-2 px-2 pb-0",
      "m-0",
      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-300 dark:border-surface-700",
      "[&_[data-pc-name=pcfilter]]:w-full"
    ]
  }
}, bl = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flexbox
      "flex",
      // Shape & Size
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      { "p-2 items-center": e.orientation == "horizontal", "flex-col sm:w-48 p-1": e.orientation !== "horizontal" }
    ]
  }),
  rootList: ({ props: e }) => ({
    class: [
      // Flexbox
      "sm:flex",
      "items-center",
      "flex-wrap",
      "flex-col sm:flex-row",
      { hidden: !(e != null && e.mobileActive), flex: e == null ? void 0 : e.mobileActive },
      // Position
      "absolute sm:relative",
      "top-full left-0",
      "sm:top-auto sm:left-auto",
      // Size
      "w-full sm:w-auto",
      // Spacing
      "m-0",
      "p-1 sm:py-0 sm:p-0",
      "list-none",
      // Shape
      "shadow-md sm:shadow-none",
      "border-0",
      // Color
      "bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent",
      // Misc
      "outline-none"
    ]
  }),
  item: ({ props: e }) => ({
    class: [
      "sm:relative static my-[2px] [&:first-child]:mt-0",
      {
        "sm:w-auto w-full": e.horizontal,
        "w-full": !e.horizontal
      }
    ]
  }),
  itemContent: ({ context: e }) => ({
    class: [
      "rounded-[4px]",
      //  Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Hover States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Size
      "leading-none",
      // Misc
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden"
    ]
  },
  itemIcon: {
    class: "mr-2"
  },
  submenuIcon: ({ props: e }) => ({
    class: [
      {
        "ml-auto sm:ml-2": e.horizontal,
        "ml-auto": !e.horizontal
      }
    ]
  }),
  overlay: ({ props: e }) => ({
    class: [
      // Size
      "w-auto",
      // Spacing
      "m-0",
      // Shape
      "shadow-none sm:shadow-md",
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      // Position
      "static sm:absolute",
      "z-10",
      {
        "sm:left-full top-0": !e.horizontal
      }
    ]
  }),
  grid: {
    class: "flex flex-wrap sm:flex-nowrap"
  },
  column: {
    class: "w-full sm:w-1/2"
  },
  submenu: {
    class: ["m-0 list-none", "p-1 px-2 w-full sm:min-w-[14rem]"]
  },
  submenuLabel: {
    class: [
      "font-semibold",
      // Spacing
      "py-2 px-3",
      "m-0",
      // Color
      "text-surface-400 dark:text-surface-500",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  button: {
    class: [
      // Flexbox
      "flex sm:hidden",
      "items-center justify-center",
      // Size
      "w-7",
      "h-7",
      // Shape
      "rounded-full",
      // Color
      "text-surface-500 dark:text-white/80",
      // States
      "hover:text-surface-600 dark:hover:text-white/60",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer",
      "no-underline"
    ]
  },
  end: {
    class: "ml-auto self-center"
  }
}, gl = {
  root: {
    class: [
      // Sizing and Shape
      "min-w-[12.5rem]",
      "rounded-md",
      // Spacing
      "p-1",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  list: {
    class: [
      // Spacings and Shape
      "list-none",
      "m-0",
      "p-0",
      "outline-none"
    ]
  },
  item: {
    class: "relative my-[2px] [&:first-child]:mt-0"
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  itemContent: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  itemIcon: {
    class: [
      // Spacing
      "mr-2"
    ]
  },
  itemLabel: {
    class: ["leading-[normal]"]
  },
  submenuLabel: {
    class: [
      // Font
      "font-bold",
      // Spacing
      "m-0",
      "py-2 px-3",
      // Shape
      "rounded-tl-none",
      "rounded-tr-none",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-400 dark:text-surface-600"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, hl = {
  root: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "p-2",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "border border-surface-200 dark:border-none"
    ]
  },
  rootList: ({ props: e }) => ({
    class: [
      // Flexbox
      "sm:flex",
      "items-center",
      "flex-wrap",
      "flex-col sm:flex-row",
      { hidden: !(e != null && e.mobileActive), flex: e == null ? void 0 : e.mobileActive },
      // Position
      "absolute sm:relative",
      "top-full left-0",
      "sm:top-auto sm:left-auto",
      // Size
      "w-full sm:w-auto",
      // Spacing
      "m-0",
      "p-1 sm:py-0 sm:p-0",
      "list-none",
      // Shape
      "shadow-md sm:shadow-none",
      "border-0",
      // Color
      "bg-surface-0 dark:bg-surface-800 sm:bg-transparent",
      // Misc
      "outline-none"
    ]
  }),
  item: {
    class: "sm:relative sm:w-auto w-full static my-[2px] [&:first-child]:mt-0"
  },
  itemContent: ({ context: e }) => ({
    class: [
      // Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled State
      { "opacity-60 pointer-events-none cursor-default": e.disabled },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }),
  itemLink: ({ context: e }) => ({
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Size
      {
        "pl-9 sm:pl-5": e.level === 1,
        "pl-14 sm:pl-5": e.level === 2
      },
      "leading-none",
      // Misc
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden"
    ]
  }),
  itemIcon: {
    class: "mr-2"
  },
  submenuIcon: ({ props: e }) => ({
    class: [
      {
        "ml-auto sm:ml-2": e.root,
        "ml-auto": !e.root
      }
    ]
  }),
  submenu: ({ props: e }) => ({
    class: [
      "flex flex-col",
      // Size
      "rounded-md",
      "min-w-[12.5rem]",
      // Spacing
      "p-1",
      "m-0",
      "list-none",
      // Shape
      "shadow-none sm:shadow-md",
      "border border-surface-200 dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      { "sm:absolute sm:left-full sm:top-0": e.level > 1 },
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  }),
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  button: {
    class: [
      // Flexbox
      "flex sm:hidden",
      "items-center justify-center",
      // Size
      "w-7",
      "h-7",
      // Shape
      "rounded-full",
      // Color
      "text-surface-500 dark:text-white/80",
      // States
      "hover:text-surface-600 dark:hover:text-white/60",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer",
      "no-underline"
    ]
  },
  end: {
    class: "ml-auto self-center"
  }
}, vl = {
  root: ({ props: e }) => ({
    class: [
      // Spacing and Shape
      "rounded-md",
      "outline",
      // Colors
      {
        "bg-blue-100/70 dark:bg-blue-500/20": e.severity == "info",
        "bg-green-100/70 dark:bg-green-500/20": e.severity == "success",
        "bg-surface-100/70 dark:bg-surface-500/20": e.severity == "secondary",
        "bg-orange-100/70 dark:bg-orange-500/20": e.severity == "warn",
        "bg-red-100/70 dark:bg-red-500/20": e.severity == "error",
        "bg-surface-950 dark:bg-surface-0": e.severity == "contrast"
      },
      {
        "outline-blue-200 dark:outline-blue-500/20": e.severity == "info",
        "outline-green-200 dark:outline-green-500/20": e.severity == "success",
        "outline-surface-200 dark:outline-surface-500/20": e.severity == "secondary",
        "outline-orange-200 dark:outline-orange-500/20": e.severity == "warn",
        "outline-red-200 dark:outline-red-500/20": e.severity == "error",
        "outline-surface-950 dark:outline-surface-0": e.severity == "contrast"
      },
      {
        "text-blue-700 dark:text-blue-300": e.severity == "info",
        "text-green-700 dark:text-green-300": e.severity == "success",
        "text-surface-700 dark:text-surface-300": e.severity == "secondary",
        "text-orange-700 dark:text-orange-300": e.severity == "warn",
        "text-red-700 dark:text-red-300": e.severity == "error",
        "text-surface-0 dark:text-surface-950": e.severity == "contrast"
      }
    ]
  }),
  content: {
    class: [
      // Flexbox
      "flex items-center h-full",
      // Spacing
      "py-2 px-3 gap-2"
    ]
  },
  icon: {
    class: [
      // Sizing and Spacing
      "shrink-0 w-[1.125rem] h-[1.125rem]"
    ]
  },
  text: {
    class: [
      // Font and Text
      "text-base leading-[normal]",
      "font-medium"
    ]
  },
  closeButton: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-7 h-7",
      // Spacing and Misc
      "ml-auto relative",
      // Shape
      "rounded-full",
      // Colors
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      {
        "focus:ring-blue-500 dark:focus:ring-blue-400": e.severity == "info",
        "focus:ring-green-500 dark:focus:ring-green-400": e.severity == "success",
        "focus:ring-surface-500 dark:focus:ring-surface-400": e.severity == "secondary",
        "focus:ring-orange-500 dark:focus:ring-orange-400": e.severity == "warn",
        "focus:ring-red-500 dark:focus:ring-red-4000": e.severity == "error",
        "focus:ring-surface-0 dark:focus:ring-surface-950": e.severity == "contrast"
      },
      // Misc
      "overflow-hidden"
    ]
  }),
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-300",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
    leaveToClass: "max-h-0 opacity-0 !m-0"
  }
}, yl = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex gap-4",
      { "flex-col": e.orientation == "horizontal", "flex-row": e.orientation == "vertical" }
    ]
  }),
  meters: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      { "flex-col": e.orientation === "vertical" },
      // Sizing
      { "w-2 h-full": e.orientation === "vertical" },
      { "h-2": e.orientation === "horizontal" },
      // Colors
      "bg-gray-200 dark:bg-gray-700",
      // Border Radius
      "rounded-lg"
    ]
  }),
  meter: ({ props: e }) => ({
    class: [
      // Shape
      "border-0",
      // Rounded Corners - Horizontal
      {
        "first:rounded-l-lg last:rounded-r-lg": e.orientation === "horizontal"
      },
      // Rounded Corners - Vertical
      {
        "first:rounded-t-lg last:rounded-b-lg": e.orientation === "vertical"
      },
      // Colors
      "bg-primary"
    ]
  }),
  labelList: ({ props: e }) => ({
    class: [
      // Display & Flexbox
      "flex flex-wrap",
      { "gap-4": e.labelOrientation === "horizontal" },
      { "gap-2": e.labelOrientation === "vertical" },
      { "flex-col": e.labelOrientation === "vertical" },
      // Conditional Alignment - Horizontal
      {
        "align-end": e.labelOrientation === "horizontal" && e.labelPosition === "end",
        "align-start": e.labelOrientation === "horizontal" && e.labelPosition === "start"
      },
      // Conditional Alignment - Vertical
      {
        "justify-start": e.labelOrientation === "vertical" && e.labelPosition === "start"
      },
      // List Styling
      "m-0 p-0 list-none"
    ]
  }),
  label: {
    class: [
      // Flexbox
      "inline-flex",
      "items-center",
      "gap-2"
    ]
  },
  labelMarker: {
    class: [
      // Display
      "inline-flex",
      // Background Color
      "bg-primary",
      // Size
      "w-2 h-2",
      // Rounded Shape
      "rounded-full"
    ]
  }
}, xl = {
  root: ({ props: e, state: t }) => ({
    class: [
      // Font
      "leading-none",
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      "rounded-md",
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-600": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-700": !e.invalid },
      { "outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  labelContainer: "overflow-hidden flex flex-auto cursor-pointer",
  label: ({ props: e, parent: t }) => {
    var r, n, o, s, a, i, l, c;
    return {
      class: [
        "text-base leading-2",
        // Spacing
        {
          "py-2 px-3": e.display === "comma" || e.display === "chip" && !((r = e == null ? void 0 : e.modelValue) != null && r.length),
          "py-1 px-1": e.display === "chip" && ((n = e == null ? void 0 : e.modelValue) == null ? void 0 : n.length) > 0
        },
        // Color
        { "text-surface-800 dark:text-white/80": (o = e.modelValue) == null ? void 0 : o.length, "text-surface-400 dark:text-surface-500": !((s = e.modelValue) != null && s.length) },
        {
          "placeholder:text-transparent dark:placeholder:text-transparent": ((a = t.instance) == null ? void 0 : a.$name) == "FloatLabel",
          "!text-transparent dark:!text-transparent": ((i = t.instance) == null ? void 0 : i.$name) == "FloatLabel" && e.modelValue == null || ((l = e.modelValue) == null ? void 0 : l.length) == 0
        },
        // Filled State *for FloatLabel
        { filled: ((c = t.instance) == null ? void 0 : c.$name) == "FloatLabel" && e.modelValue !== null },
        // Transitions
        "transition duration-200",
        // Misc
        "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md",
      "mt-[2px]"
    ]
  },
  header: {
    class: [
      //Flex
      "flex items-center justify-between",
      // Spacing
      "pt-2 px-4 pb-0 gap-2",
      "m-0",
      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-300 dark:border-surface-700",
      "[&_[data-pc-name=pcfiltercontainer]]:!flex-auto",
      "[&_[data-pc-name=pcfilter]]:w-full"
    ]
  },
  listContainer: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context: e }) => ({
    class: [
      "relative",
      "flex items-center",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2 gap-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected },
      { "hover:bg-highlight-emphasis": e.selected },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  loadingIcon: {
    class: "text-surface-400 dark:text-surface-500 animate-spin"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, wl = {
  root: "flex",
  controls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  container: {
    class: [
      "flex-auto",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      "outline-none"
    ]
  }
}, kl = {
  table: {
    class: [
      // Spacing & Position
      "mx-auto my-0",
      // Table Style
      "border-spacing-0 border-separate"
    ]
  },
  cell: {
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3"
    ]
  },
  node: ({ context: e }) => ({
    class: [
      "relative inline-block",
      // Spacing
      "py-3 px-4",
      // Shape
      "border",
      "rounded-md",
      "border-surface-200 dark:border-surface-700",
      // Color
      {
        "text-surface-600 dark:text-white/80": !(e != null && e.selected),
        "bg-surface-0 dark:bg-surface-900": !(e != null && e.selected),
        "bg-highlight": e == null ? void 0 : e.selected
      },
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-surface-800": (e == null ? void 0 : e.selectable) && !(e != null && e.selected),
        "hover:bg-highlight-emphasis": (e == null ? void 0 : e.selectable) && (e == null ? void 0 : e.selected)
      },
      { "cursor-pointer": e == null ? void 0 : e.selectable }
    ]
  }),
  lineCell: {
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3"
    ]
  },
  connectorDown: {
    class: [
      // Spacing
      "mx-auto my-0",
      // Size
      "w-px h-[20px]",
      // Color
      "bg-surface-200 dark:bg-surface-700"
    ]
  },
  connectorLeft: ({ context: e }) => ({
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3",
      // Shape
      "rounded-none border-r",
      { "border-t": e.lineTop },
      // Color
      "border-surface-200 dark:border-surface-700"
    ]
  }),
  connectorRight: ({ context: e }) => ({
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3",
      // Shape
      "rounded-none",
      // Color
      { "border-t border-surface-200 dark:border-surface-700": e.lineTop }
    ]
  }),
  nodeCell: {
    class: "text-center align-top py-0 px-3"
  },
  nodeToggleButton: {
    class: [
      // Position
      "absolute bottom-[-0.75rem] left-2/4 -ml-3",
      "z-20",
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-6 h-6",
      // Shape
      "rounded-full",
      "border border-surface-200 dark:border-surface-700",
      // Color
      "bg-inherit text-inherit",
      // Focus
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "cursor-pointer no-underline select-none"
    ]
  },
  nodeToggleButtonIcon: {
    class: [
      // Position
      "static inline-block",
      // Size
      "w-4 h-4"
    ]
  }
}, _l = {
  root: {
    class: [
      "relative",
      "[&>[data-pc-name=pcbadge]]:absolute",
      "[&>[data-pc-name=pcbadge]]:top-0",
      "[&>[data-pc-name=pcbadge]]:right-0",
      "[&>[data-pc-name=pcbadge]]:translate-x-1/2",
      "[&>[data-pc-name=pcbadge]]:-translate-y-1/2",
      "[&>[data-pc-name=pcbadge]]:m-0",
      "[&>[data-pc-name=pcbadge]]:origin-[100%_0]",
      "[&>[data-pc-name=pcbadge]]:outline",
      "[&>[data-pc-name=pcbadge]]:outline-[2px]",
      "[&>[data-pc-name=pcbadge]]:outline-surface-0",
      "dark:[&>[data-pc-name=pcbadge]]:outline-surface-900"
    ]
  }
}, Cl = {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-center flex-wrap",
      // Spacing
      "px-4 py-2",
      // Shape
      "border-0 rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-500 dark:text-white/60"
    ]
  },
  first: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  prev: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  next: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  last: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  page: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      {
        "bg-highlight text-highlight-contrast border-highlight text-highlight-contrast hover:bg-highlight-emphasis ": e.active,
        "text-surface-500 dark:text-white/60": !e.active
      },
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled && !e.active,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  contentStart: "mr-auto",
  contentEnd: "ml-auto"
}, Sl = {
  root: {
    class: [
      //Shape
      "rounded-md",
      //Colors
      "border border-surface-200 dark:border-surface-700",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  header: ({ props: e }) => ({
    class: [
      // Flex
      "flex items-center justify-between",
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "bg-transparent",
      //Shape
      "rounded-tl-md rounded-tr-md",
      "border-0",
      // Conditional Spacing
      { "p-[1.125rem]": !e.toggleable, "py-3 px-[1.125rem]": e.toggleable }
    ]
  }),
  title: {
    class: "leading-none font-semibold"
  },
  pctogglebutton: {
    root: {
      class: [
        // Positioning
        "relative",
        // Flexbox alignment
        "inline-flex items-center justify-center text-center",
        // Line height
        "leading-[normal]",
        // Size
        "w-10 h-10 px-0 py-2",
        // Shape
        "rounded-[50%] rounded-full",
        // Background and border
        "bg-transparent border-transparent",
        // Text color
        "text-surface-500 dark:text-surface-300",
        // Focus states
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-surface-500 dark:focus:ring-surface-400",
        // Hover effect
        "hover:bg-surface-300/10",
        // Transition effects
        "transition duration-200 ease-in-out",
        // Cursor and overflow
        "cursor-pointer overflow-hidden select-none"
      ]
    }
  },
  content: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",
      // Shape
      "border-0 border-t-0 last:rounded-br-md last:rounded-bl-md",
      //Color
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  footer: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",
      // Shape
      "border-0 border-t-0 rounded-br-lg rounded-bl-lg",
      //Color
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, $l = {
  panel: {
    class: "p-1 overflow-hidden mb-3 border border-surface-200 dark:border-surface-700 rounded-md"
  },
  header: {
    class: ["rounded-[4px]", "outline-none"]
  },
  headerContent: ({ context: e }) => ({
    class: [
      // Shape
      "rounded-[4px]",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-600 dark:text-surface-0/80",
      { "text-surface-900": e.active },
      // States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "hover:text-surface-900",
      // Transition
      "transition duration-200 ease-in-out",
      "transition-shadow duration-200"
    ]
  }),
  headerLink: {
    class: [
      "relative",
      // Font
      "font-semibold",
      "leading-none",
      // Flex & Alignments
      "flex items-center",
      // Spacing
      "py-2 px-3",
      // Misc
      "select-none cursor-pointer no-underline"
    ]
  },
  headerLabel: {
    class: "leading-none"
  },
  headerIcon: {
    class: "mr-2"
  },
  submenuIcon: {
    class: "mr-2"
  },
  content: {
    class: [
      // Spacing
      "pl-4",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  rootList: {
    class: ["outline-none", "m-0 p-0 list-none"]
  },
  menuitem: {
    class: "relative my-[2px]"
  },
  itemContent: {
    class: [
      // Shape
      "border-none rounded-[4px]",
      // Color
      "text-surface-700 dark:text-white/80",
      // Transition
      "transition-shadow duration-200"
    ]
  },
  itemLink: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "leading-none",
      // Flex & Alignments
      "flex items-center",
      // Spacing
      "py-2 px-3",
      // Shape
      "rounded-[4px]",
      // Color
      "text-surface-700 dark:text-white/80",
      // States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)] hover:text-surface-700 dark:hover:text-white/80",
      {
        "bg-surface-200 text-surface-700 dark:text-white/80 dark:bg-surface-0/10": e.focused
      },
      // Misc
      "cursor-pointer no-underline",
      "select-none overflow-hidden"
    ]
  }),
  itemIcon: {
    class: "mr-2"
  },
  submenu: {
    class: "p-0 pl-4 m-0 list-none"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, Tl = {
  root: ({ props: e }) => ({
    class: ["relative [&>input]:w-full", { "[&>input]:pr-10": e.toggleMask }, { "flex [&>input]:w-full": e.fluid, "inline-flex": !e.fluid }]
  }),
  overlay: {
    class: [
      // Spacing
      "p-3",
      // Shape
      "border",
      "shadow-md rounded-md",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  meter: {
    class: [
      // Position and Overflow
      "overflow-hidden",
      "relative",
      // Shape and Size
      "border-0",
      "h-[10px]",
      "rounded-md",
      // Spacing
      "mb-3",
      // Colors
      "bg-surface-100 dark:bg-surface-700"
    ]
  },
  meterLabel: ({ instance: e }) => {
    var t, r, n;
    return {
      class: [
        // Size
        "h-full",
        // Colors
        {
          "bg-red-500 dark:bg-red-400/50": ((t = e == null ? void 0 : e.meter) == null ? void 0 : t.strength) == "weak",
          "bg-orange-500 dark:bg-orange-400/50": ((r = e == null ? void 0 : e.meter) == null ? void 0 : r.strength) == "medium",
          "bg-green-500 dark:bg-green-400/50": ((n = e == null ? void 0 : e.meter) == null ? void 0 : n.strength) == "strong"
        },
        // Transitions
        "transition-all duration-1000 ease-in-out"
      ]
    };
  },
  maskIcon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  unmaskIcon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Pl = {
  root: "flex [&_[data-pc-name=pclist]]:h-full",
  sourceControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  sourceListContainer: {
    class: [
      // Flexbox
      "grow shrink basis-2/4",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      "outline-none"
    ]
  },
  transferControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  targetListContainer: {
    class: [
      // Flexbox
      "grow shrink basis-2/4",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      "outline-none"
    ]
  },
  targetControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  transition: {
    enterFromClass: "!transition-none",
    enterActiveClass: "!transition-none",
    leaveActiveClass: "!transition-none",
    leaveToClass: "!transition-none"
  }
}, Oo = {
  root: {
    class: [
      // Shape
      "rounded-md shadow-lg",
      // Position
      "absolute left-0 top-0 mt-3",
      '[&[data-p-popover-flipped="true"]]:mb-3 [&[data-p-popover-flipped="true"]]:-mt-3',
      "z-40 transform origin-center",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      // Before: Arrow
      "before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[10px] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700",
      "after:absolute after:w-0 after:-top-[0.54rem] after:left-[4px] after:h-0 after:border-transparent after:border-solid after:ml-[8px] after:border-x-[8px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900",
      // Flipped: Arrow
      '[&[data-p-popover-flipped="true"]]:before:-bottom-3 [&[data-p-popover-flipped="true"]]:before:top-auto [&[data-p-popover-flipped="true"]]:before:border-b-0 [&[data-p-popover-flipped="true"]]:before:border-t-[10px] [&[data-p-popover-flipped="true"]]:before:border-t-surface-200 dark:[&[data-p-popover-flipped="true"]]:before:border-t-surface-700',
      '[&[data-p-popover-flipped="true"]]:after:-bottom-[0.54rem] [&[data-p-popover-flipped="true"]]:after:top-auto [&[data-p-popover-flipped="true"]]:after:border-b-0 [&[data-p-popover-flipped="true"]]:after:border-t-[8px] [&[data-p-popover-flipped="true"]]:after:border-t-surface-0 dark:[&[data-p-popover-flipped="true"]]:after:border-t-surface-900'
    ]
  },
  content: {
    class: ["p-5 items-center flex", "rounded-lg", "border border-surface-200 dark:border-surface-700"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Ol = {
  root: {
    class: [
      // Position and Overflow
      "overflow-hidden",
      "relative",
      // Shape and Size
      "border-0",
      "h-5",
      "rounded-md",
      // Colors
      "bg-surface-100 dark:bg-surface-800"
    ]
  },
  value: ({ props: e }) => ({
    class: [
      // Flexbox & Overflow & Position
      { "absolute flex items-center justify-center overflow-hidden": e.mode !== "indeterminate" },
      // Colors
      "bg-primary",
      // Spacing & Sizing
      "m-0",
      { "h-full w-0": e.mode !== "indeterminate" },
      // Shape
      "border-0",
      // Transitions
      {
        "transition-width duration-1000 ease-in-out": e.mode !== "indeterminate",
        "progressbar-value-animate": e.mode == "indeterminate"
      },
      // Before & After (indeterminate)
      {
        "before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ": e.mode == "indeterminate",
        "after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000": e.mode == "indeterminate"
      }
    ]
  }),
  label: {
    class: [
      //Font
      "text-xs font-semibold",
      // Flexbox
      "inline-flex",
      // Font and Text
      "text-white dark:text-surface-900",
      "leading-5"
    ]
  }
}, Il = {
  root: {
    class: [
      // Position
      "relative",
      "mx-auto",
      // Sizing
      "w-28",
      "h-28",
      // Flexbox
      "inline-block",
      // Pseudo-Elements
      "before:block",
      "before:pt-full"
    ]
  },
  spinner: {
    class: [
      // Position
      "absolute",
      "top-0",
      "bottom-0",
      "left-0",
      "right-0",
      "m-auto",
      // Sizing
      "w-full",
      "h-full",
      // Transformations
      "transform",
      "origin-center",
      // Animations
      "animate-spin"
    ]
  },
  circle: {
    class: [
      // Colors
      "text-red-500",
      // Misc
      "progress-spinner-circle"
    ]
  }
}, Al = {
  root: {
    class: [
      "relative",
      // Flexbox & Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-5 h-5",
      // Misc
      "cursor-pointer",
      "select-none"
    ]
  },
  box: ({ props: e, context: t }) => ({
    class: [
      // Flexbox
      "flex justify-center items-center",
      // Size
      "w-5 h-5",
      // Shape
      "border outline-transparent",
      "rounded-full",
      // Transition
      "transition duration-200 ease-in-out",
      // Colors
      {
        "text-surface-700 dark:text-white/80": t.checked,
        "border-surface-300 dark:border-surface-700": !t.checked && !e.invalid,
        "border-primary bg-primary": t.checked && !e.disabled
      },
      // Invalid State
      { "border-red-500 dark:border-red-400": e.invalid },
      // States
      {
        "peer-hover:border-surface-400 dark:peer-hover:border-surface-400": !e.disabled && !e.invalid && !t.checked,
        "peer-hover:border-primary-emphasis": !e.disabled && !t.checked,
        "peer-hover:[&>*:first-child]:bg-primary-600 dark:peer-hover:[&>*:first-child]:bg-primary-300": !e.disabled && !t.checked,
        "peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400": !e.disabled,
        "bg-surface-200 [&>*:first-child]:bg-surface-600 dark:bg-surface-700 dark:[&>*:first-child]:bg-surface-400 border-surface-300 dark:border-surface-700 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  input: {
    class: [
      "peer",
      // Size
      "w-full ",
      "h-full",
      // Position
      "absolute",
      "top-0 left-0",
      "z-10",
      // Spacing
      "p-0",
      "m-0",
      // Shape
      "opacity-0",
      "rounded-md",
      "outline-none",
      "border-1 border-surface-200 dark:border-surface-700",
      // Misc
      "appearance-none",
      "cursor-pointer"
    ]
  },
  icon: ({ context: e }) => ({
    class: [
      "block",
      // Shape
      "rounded-full",
      // Size
      "w-3 h-3",
      // Conditions
      {
        "bg-surface-0 dark:bg-surface-900": e.checked,
        "bg-primary": !e.checked,
        "backface-hidden invisible scale-[0.1]": !e.checked,
        "transform visible translate-z-0 scale-[1,1]": e.checked
      },
      // Transition
      "transition duration-200"
    ]
  })
}, Ll = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "flex items-center",
      "gap-1",
      // Misc
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  option: ({ props: e, context: t }) => ({
    class: [
      // Flex & Alignment
      "inline-flex items-center",
      // State
      {
        "outline-none ring-1 ring-primary-500/50 dark:ring-primary-500": t.focused
      },
      // Misc
      {
        "cursor-pointer": !e.readonly,
        "cursor-default": e.readonly
      }
    ]
  }),
  offIcon: ({ props: e }) => ({
    class: [
      // Size
      "w-4 h-4",
      // Color
      "text-surface-700 dark:text-surface-0/80",
      // State
      { "hover:text-primary-500 dark:hover:text-primary-400": !e.readonly },
      // Transition
      "transition duration-200 ease-in"
    ]
  }),
  onIcon: ({ props: e }) => ({
    class: [
      // Size
      "w-4 h-4",
      // Color
      "text-primary",
      // State
      { "hover:text-primary-600 dark:hover:text-primary-300": !e.readonly },
      // Transition
      "transition duration-200 ease-in"
    ]
  })
}, jl = {
  root: {
    class: ["block absolute bg-surface-200 dark:bg-surface-700 rounded-full pointer-events-none"],
    style: "transform: scale(0)"
  }
}, El = {
  root: {
    class: ["group"]
  },
  contentContainer: {
    class: [
      // Size & Position
      "h-full w-full",
      // Layering
      "z-[1]",
      // Spacing
      "overflow-hidden",
      // Misc
      "relative float-left"
    ]
  },
  content: {
    class: [
      // Size & Spacing
      "h-[calc(100%+18px)] w-[calc(100%+18px)] pr-[18px] pb-[18px] pl-0 pt-0",
      // Overflow & Scrollbar
      "overflow-scroll scrollbar-none",
      // Box Model
      "box-border",
      // Position
      "relative",
      // Webkit Specific
      "[&::-webkit-scrollbar]:hidden"
    ]
  },
  barX: {
    class: [
      // Size & Position
      "h-[9px] bottom-0",
      // Appearance
      "bg-surface-100 dark:bg-surface-800 rounded",
      "opacity-0",
      // Interactivity
      "cursor-pointer",
      "focus:outline-none",
      // Visibility & Layering
      "invisible z-20",
      // Transition
      "transition duration-[250ms] ease-linear",
      // Misc
      "relative",
      "group-hover:opacity-100"
    ]
  },
  barY: {
    class: [
      // Size & Position
      "w-[9px] top-0",
      // Appearance
      "bg-surface-100 dark:bg-surface-800 rounded",
      "opacity-0",
      // Interactivity
      "cursor-pointer",
      "focus:outline-none",
      // Visibility & Layering
      "z-20",
      // Transition
      "transition duration-[250ms] ease-linear",
      // Misc
      "relative",
      "group-hover:opacity-100"
    ]
  }
}, zl = {
  button: ({ props: e }) => ({
    root: {
      class: [
        // Flex & Alignment
        "flex items-center justify-center",
        // Positioning
        {
          "!sticky flex ml-auto": e.target === "parent",
          "!fixed": e.target === "window"
        },
        "bottom-[20px] right-[20px]",
        "h-10 w-10 rounded-full shadow-md",
        "text-white dark:text-surface-900 bg-surface-600 dark:bg-surface-700",
        "hover:bg-surface-600 dark:hover:bg-surface-300"
      ]
    }
  }),
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-150",
    leaveActiveClass: "transition-opacity duration-150",
    leaveToClass: "opacity-0"
  }
}, Io = {
  root: ({ props: e, state: t, parent: r }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      { "rounded-md": r.instance.$name !== "InputGroup" },
      { "first:rounded-l-md rounded-none last:rounded-r-md": r.instance.$name == "InputGroup" },
      { "border-0 border-y border-l last:border-r": r.instance.$name == "InputGroup" },
      { "first:ml-0 ml-[-1px]": r.instance.$name == "InputGroup" && !e.showButtons },
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "dark:border-surface-700": r.instance.$name != "InputGroup" },
      { "dark:border-surface-600": r.instance.$name == "InputGroup" },
      { "border-surface-300 dark:border-surface-600": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-600": !e.invalid },
      { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-secondary-400 z-10": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  label: ({ props: e, parent: t }) => {
    var r;
    return {
      class: [
        //Font
        "leading-[normal]",
        // Display
        "block",
        "flex-auto",
        // Color and Background
        "bg-transparent",
        "border-0",
        { "text-surface-800 dark:text-white/80": e.modelValue != null, "text-surface-400 dark:text-surface-500": e.modelValue == null },
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        // Sizing and Spacing
        "w-[1%]",
        "py-2 px-3",
        { "pr-7": e.showClear },
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus:outline-none focus:shadow-none",
        // Filled State *for FloatLabel
        { filled: ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel" && e.modelValue !== null },
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md"
    ]
  },
  listContainer: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context: e }) => ({
    class: [
      "relative",
      "flex items-center",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected },
      { "hover:bg-highlight-emphasis": e.selected },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  optionCheckIcon: "relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",
  optionBlankIcon: "w-4 h-4",
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  header: {
    class: [
      // Spacing
      "pt-2 px-2 pb-0",
      "m-0",
      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-300 dark:border-surface-700"
    ]
  },
  clearIcon: {
    class: [
      // Color
      "text-surface-400 dark:text-surface-500",
      // Position
      "absolute",
      "top-1/2",
      "right-12",
      // Spacing
      "-mt-2"
    ]
  },
  loadingIcon: {
    class: "text-surface-400 dark:text-surface-500 animate-spin"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Rl = {
  root: ({ props: e }) => ({
    class: [
      "inline-flex select-none align-bottom outline-transparent",
      "border rounded-md [&>button]:rounded-none [&>button]:border-none",
      "[&>button:first-child]:border-r-none [&>button:first-child]:rounded-r-none [&>button:first-child]:rounded-tl-md [&>button:first-child]:rounded-bl-md",
      "[&>button:last-child]:border-l-none [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-tr-md [&>button:last-child]:rounded-br-md",
      // Invalid State
      {
        "border-red-500 dark:border-red-400": e.invalid,
        "border-transparent": !e.invalid
      }
    ]
  })
}, Nl = {
  root: ({ props: e }) => ({
    class: [
      "overflow-hidden",
      {
        "animate-pulse": e.animation !== "none"
      },
      // Round
      { "rounded-full": e.shape === "circle", "rounded-md": e.shape !== "circle" },
      // Colors
      "bg-surface-200 dark:bg-surface-700"
    ]
  })
}, Ml = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Size
      { "h-[3px]": e.orientation == "horizontal", "w-[3px]": e.orientation == "vertical" },
      // Shape
      "border-0",
      "rounded-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      { "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  range: ({ props: e }) => ({
    class: [
      // Position
      "block absolute",
      {
        "top-0 left-0": e.orientation == "horizontal",
        "bottom-0 left-0": e.orientation == "vertical"
      },
      //Size
      {
        "h-full": e.orientation == "horizontal",
        "w-full": e.orientation == "vertical"
      },
      // Shape
      "rounded-md",
      // Colors
      "bg-primary"
    ]
  }),
  handle: ({ props: e }) => ({
    class: [
      "flex items-center justify-center",
      // Size
      "h-[20px]",
      "w-[20px]",
      {
        "top-[50%] -mt-[10px] -ml-[10px]": e.orientation == "horizontal",
        "left-[50%] -mb-[10px] -ml-[10px]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  }),
  startHandler: ({ props: e }) => ({
    class: [
      "flex items-center justify-center",
      // Size
      "h-[20px]",
      "w-[20px]",
      {
        "top-[50%] -mt-[10px] -ml-[10px]": e.orientation == "horizontal",
        "left-[50%] -mb-[10px] -ml-[10px]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  }),
  endHandler: ({ props: e }) => ({
    class: [
      "flex items-center justify-center",
      // Size
      "h-[20px]",
      "w-[20px]",
      {
        "top-[50%] -mt-[10px] -ml-[10px]": e.orientation == "horizontal",
        "left-[50%] -mb-[10px] -ml-[10px]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  })
}, Fl = {
  root: ({ state: e }) => ({
    class: [
      "static flex gap-2",
      {
        "[&_[data-pc-name=pcbutton]]:rotate-45": e.d_visible,
        "[&_[data-pc-name=pcbutton]]:rotate-0": !e.d_visible
      }
    ]
  }),
  list: {
    class: [
      // Spacing
      "m-0 p-0",
      // Layout & Flexbox
      "list-none flex items-center justify-center",
      // Transitions
      "transition delay-200",
      // Z-Index (Positioning)
      "z-20"
    ]
  },
  item: ({ props: e, context: t }) => ({
    class: [
      "transform transition-transform duration-200 ease-out transition-opacity duration-800",
      // Conditional Appearance
      t.hidden ? "opacity-0 scale-0" : "opacity-100 scale-100",
      // Conditional Spacing
      {
        "my-1 first:mb-2": e.direction == "up" && e.type == "linear",
        "my-1 first:mt-2": e.direction == "down" && e.type == "linear",
        "mx-1 first:mr-2": e.direction == "left" && e.type == "linear",
        "mx-1 first:ml-2": e.direction == "right" && e.type == "linear"
      },
      // Conditional Positioning
      { absolute: e.type !== "linear" }
    ]
  }),
  mask: ({ state: e }) => ({
    class: [
      // Base Styles
      "absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0",
      // Conditional Appearance
      {
        "opacity-0 pointer-events-none": !e.d_visible,
        "opacity-100 transition-opacity duration-400 ease-in-out": e.d_visible
      }
    ]
  })
}, Vl = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox and Position
      "inline-flex",
      "relative",
      // Shape
      "rounded-md",
      { "shadow-lg": e.raised },
      "[&>[data-pc-name=pcbutton]]:rounded-tr-none",
      "[&>[data-pc-name=pcbutton]]:rounded-br-none",
      "[&>[data-pc-name=pcdropdown]]:rounded-tl-none",
      "[&>[data-pc-name=pcdropdown]]:rounded-bl-none",
      "[&>[data-pc-name=pcmenu]]:min-w-full"
    ]
  })
}, Bl = {
  root: ({ context: e }) => ({
    class: [
      // Colors
      "bg-surface-0",
      "dark:bg-surface-900",
      "text-surface-700",
      "dark:text-surface-0/80",
      // Shape
      "rounded-md",
      // Borders (Conditional)
      { "border border-solid border-surface-200 dark:border-surface-700": !e.nested },
      // Nested
      { "flex grow border-0": e.nested }
    ]
  }),
  gutter: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      "items-center",
      "justify-center",
      "shrink-0",
      // Colors
      "bg-surface-100",
      "dark:bg-surface-700",
      // Transitions
      "transition-all",
      "duration-200",
      // Misc
      {
        "cursor-col-resize": e.layout == "horizontal",
        "cursor-row-resize": e.layout !== "horizontal"
      }
    ]
  }),
  gutterhandler: ({ props: e }) => ({
    class: [
      "z-20",
      // Colors
      "bg-surface-100",
      "dark:bg-surface-700",
      // Shape
      "rounded-md",
      //States
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
      // Transitions
      "transition-all",
      "duration-200",
      // Sizing (Conditional)
      {
        "h-[1.70rem]": e.layout == "horizontal",
        "w-[1.70rem] h-2": e.layout !== "horizontal"
      }
    ]
  })
}, Dl = {
  root: ({ context: e }) => ({
    class: ["grow", { flex: e.nested }]
  })
}, Hl = {
  root: ({ context: e }) => ({
    class: ["relative flex flex-auto items-center gap-2 p-2 last-of-type:flex-[initial]", { "cursor-default pointer-events-none select-none opacity-60": e.disabled }, "[&_[data-pc-section=separator]]:has-[~[data-p-active=true]]:bg-primary"]
  }),
  header: ({ props: e, context: t }) => ({
    class: [
      "inline-flex items-center border-0 cursor-pointer rounded-md outline-transparent bg-transparent p-0 gap-2",
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
      { "!cursor-default": t.active },
      { "cursor-auto": e.linear }
    ]
  }),
  number: ({ context: e }) => ({
    class: [
      // Flexbox
      "flex",
      "items-center",
      "justify-center",
      //Colors
      "border-solid border-2 border-surface-200 dark:border-surface-700",
      // Colors (Conditional)
      e.active ? "text-primary" : "text-surface-900 dark:text-surface-0",
      // Adjust colors as needed
      // Size and Shape
      "min-w-[2rem]",
      "h-[2rem]",
      "line-height-[2rem]",
      "rounded-full",
      // Text
      "text-lg",
      // Transitions
      "transition",
      "transition-colors",
      "transition-shadow",
      "duration-200"
    ]
  }),
  title: ({ context: e }) => ({
    class: [
      // Layout
      "block",
      "whitespace-nowrap",
      "overflow-hidden",
      "text-ellipsis",
      "max-w-full",
      // Text
      e.active ? "text-primary" : "text-surface-700 dark:text-surface-0/80",
      "font-medium",
      // Transitions
      "transition",
      "transition-colors",
      "transition-shadow",
      "duration-200"
    ]
  })
}, Ul = {
  root: ({ state: e }) => ({
    class: [
      "flex flex-col flex-[initial] has-[[data-pc-name=steppanels]]:px-2 has-[[data-pc-name=steppanels]]:pt-3.5 has-[[data-pc-name=steppanels]]:pb-[1.125rem]",
      { "flex-auto": e.isActive },
      "[&>[data-pc-name=step]]:flex-[initial]",
      "[&>[data-pc-name=steppanel]]:flex [&>[data-pc-name=steppanel]]:flex-auto [&>[data-pc-name=steppanel]>[data-pc-section=content]]:w-full [&>[data-pc-name=steppanel]>[data-pc-section=content]]:pl-4 [&:last-child>[data-pc-name=steppanel]>[data-pc-section=content]]:ps-8",
      "[&>[data-pc-name=steppanel]>[data-pc-section=separator]]:relative [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:!flex-initial [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:shrink-0 [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:w-[2px] [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:h-auto [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:m-2 [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:left-[-2px] [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:ml-[1.625rem]"
    ]
  })
}, Kl = {
  root: "relative flex justify-between items-center m-0 p-0 list-none overflow-x-auto"
}, Gl = {
  root: "px-2 pt-3.5 pb-[1.125rem]"
}, Wl = {
  root: "has-[[data-pc-name=stepitem]]:flex has-[[data-pc-name=stepitem]]:flex-col",
  separator: "flex-1 w-full h-[2px] bg-surface-200 dark:bg-surface-700 transition-shadow duration-200",
  transition: {
    class: ["flex flex-1", "bg-surface-0 dark:bg-surface-900", "text-surface-900 dark:text-surface-0"],
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, ql = {
  root: {
    class: "relative"
  },
  menu: {
    class: "p-0 m-0 list-none flex"
  },
  menuitem: {
    class: [
      // Flexbox and Position
      "relative",
      "flex",
      "justify-center",
      "flex-1",
      "overflow-hidden",
      // Before
      "before:border-t-2",
      "before:border-surface-200",
      "before:dark:border-surface-700",
      "before:w-full",
      "[&:first-child]:before:w-[calc(50%+1rem)]",
      "[&:last-child]:before:w-1/2",
      "before:absolute",
      "before:top-1/2",
      "before:left-0",
      "before:transform",
      "before:mt-[calc(-1rem+1px)]",
      "[&:first-child]:before:translate-x-[100%]"
    ]
  },
  action: ({ props: e }) => ({
    class: [
      // Flexbox
      "inline-flex items-center",
      "flex-col",
      // Transitions and Shape
      "transition-shadow",
      "rounded-md",
      // Colors
      "bg-surface-0",
      "dark:bg-transparent",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden",
      { "cursor-pointer": !e.readonly }
    ]
  }),
  step: ({ context: e, props: t }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Position
      "z-20",
      // Shape
      "rounded-full",
      "border-2",
      // Size
      "w-8",
      "h-8",
      "text-sm",
      "leading-[2rem]",
      "font-medium",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-100 dark:border-surface-700",
      {
        "text-surface-400 dark:text-white/60": !e.active,
        "text-primary": e.active
      },
      // States
      {
        "hover:border-surface-300 dark:hover:border-surface-500": !e.active && !t.readonly
      },
      // Transition
      "transition-colors duration-200 ease-in-out"
    ]
  }),
  label: ({ context: e }) => ({
    class: [
      // Font
      "leading-[normal]",
      "font-medium",
      // Display
      "block",
      // Spacing
      "mt-2",
      // Colors
      { "text-surface-700 dark:text-white/70": !e.active, "text-primary": e.active },
      // Text and Overflow
      "whitespace-nowrap",
      "overflow-hidden",
      "overflow-ellipsis",
      "max-w-full"
    ]
  })
}, Zl = {
  root: ({ props: e, context: t }) => ({
    class: [
      "relative shrink-0",
      // Shape
      "border-b",
      "rounded-t-md",
      // Spacing
      "py-4 px-[1.125rem]",
      "-mb-px",
      // Colors and Conditions
      "outline-transparent",
      {
        "border-surface-200 dark:border-secondary-400": t.active,
        "border-surface-200 dark:border-transparent": !t.active,
        "text-surface-700 dark:text-surface-0/80": !t.active,
        "bg-surface-0 dark:bg-transparent": t.active,
        "text-secondary-400": t.active,
        "opacity-60 cursor-default user-select-none select-none pointer-events-none": e == null ? void 0 : e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-secondary-400",
      // Transitions
      "transition-all duration-200",
      // Misc
      "cursor-pointer select-none whitespace-nowrap",
      "user-select-none"
    ]
  })
}, Yl = {
  root: "relative flex",
  content: "overflow-x-auto overflow-y-hidden scroll-smooth overscroll-x-contain overscroll-y-auto [&::-webkit-scrollbar]:hidden grow dark:bg-surface-800",
  tabList: "relative flex border-solid border-b border-surface-200 dark:border-surface-900",
  nextButton: "!absolute top-0 right-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-800 outline-transparent cursor-pointer shrink-0",
  prevButton: "!absolute top-0 left-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-800 outline-transparent cursor-pointer shrink-0",
  activeBar: "z-10 block absolute h-[1px] bottom-[-1px] bg-primary-400"
}, Jl = {
  root: {
    class: "overflow-x-auto"
  },
  menu: {
    class: [
      // Flexbox
      "flex flex-1",
      // Spacing
      "list-none",
      "p-0 m-0",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border-b-2 border-surface-200 dark:border-surface-700",
      "text-surface-900 dark:text-surface-0/80"
    ]
  },
  menuitem: {
    class: "mr-0"
  },
  action: ({ context: e, state: t }) => ({
    class: [
      "relative",
      // Font
      "font-semibold leading-none",
      // Flexbox and Alignment
      "flex items-center",
      // Spacing
      "py-4 px-[1.125rem]",
      "-mb-px",
      // Shape
      "border-b",
      "rounded-t-md",
      // Colors and Conditions
      {
        "border-surface-200 dark:border-surface-700": t.d_activeIndex !== e.index,
        "text-surface-700 dark:text-surface-0/80": t.d_activeIndex !== e.index,
        "bg-surface-0 dark:bg-surface-900": t.d_activeIndex === e.index,
        "border-primary": t.d_activeIndex === e.index,
        "text-primary": t.d_activeIndex === e.index
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
      {
        "hover:text-surface-900 dark:hover:text-surface-0": t.d_activeIndex !== e.index
      },
      // Transitions
      "transition-all duration-200",
      // Misc
      "cursor-pointer select-none text-decoration-none",
      "overflow-hidden",
      "user-select-none"
    ]
  }),
  icon: {
    class: "mr-2"
  }
}, Ql = {
  root: "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300"
}, Xl = {
  root: "bg-surface-0 dark:bg-surface-800 text-surface-900 dark:text-surface-0/80 outline-0 p-[1.125rem] pt-[0.875rem]"
}, ec = {
  root: ({ props: e }) => ({
    class: ["flex flex-col", { "[&>[data-pc-name=tablist]]:overflow-hidden": e.scrollable }]
  })
}, tc = {
  // For PrimeVue version 3
  navContainer: ({ props: e }) => ({
    class: [
      // Position
      "relative",
      // Misc
      { "overflow-hidden": e.scrollable }
    ]
  }),
  navContent: ({ instance: e }) => ({
    class: [
      // Overflow and Scrolling
      "overflow-y-hidden overscroll-contain",
      "overscroll-auto",
      "scroll-smooth",
      "[&::-webkit-scrollbar]:hidden"
    ]
  }),
  previousButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Position
      "!absolute",
      "top-0 left-0",
      "z-20",
      // Size and Shape
      "h-full w-10",
      "rounded-none",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      "shadow-sm"
    ]
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Position
      "!absolute",
      "top-0 right-0",
      "z-20",
      // Size and Shape
      "h-full w-10",
      "rounded-none",
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "bg-surface-0 dark:bg-surface-900",
      "shadow-sm"
    ]
  },
  nav: {
    class: [
      // Flexbox
      "flex flex-1",
      // Spacing
      "list-none",
      "p-0 m-0",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border-b border-surface-200 dark:border-surface-700",
      "text-surface-900 dark:text-surface-0/80"
    ]
  },
  tabpanel: {
    header: ({ props: e }) => ({
      class: [
        // Spacing
        "mr-0",
        // Misc
        "outline-none",
        {
          "opacity-60 cursor-default user-select-none select-none pointer-events-none": e == null ? void 0 : e.disabled
        }
      ]
    }),
    headerAction: ({ parent: e, context: t }) => ({
      class: [
        "relative",
        // Font
        "font-semibold",
        // Flexbox and Alignment
        "flex items-center",
        // Spacing
        "py-4 px-[1.125rem]",
        "-mb-px",
        // Shape
        "border-b-2",
        "rounded-t-md",
        // Colors and Conditions
        {
          "border-surface-200 dark:border-surface-700": e.state.d_activeIndex !== t.index,
          "text-surface-700 dark:text-surface-0/80": e.state.d_activeIndex !== t.index,
          "bg-surface-0 dark:bg-surface-900": e.state.d_activeIndex === t.index,
          "border-primary": e.state.d_activeIndex === t.index,
          "text-primary": e.state.d_activeIndex === t.index
        },
        // States
        "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
        {
          "hover:bg-surface-0 dark:hover:bg-surface-800/80": e.state.d_activeIndex !== t.index,
          "hover:text-surface-900 dark:hover:text-surface-0": e.state.d_activeIndex !== t.index
        },
        // Transitions
        "transition-all duration-200",
        // Misc
        "cursor-pointer select-none text-decoration-none",
        "overflow-hidden",
        "user-select-none"
      ]
    }),
    headerTitle: {
      class: [
        // Text
        "leading-none",
        "whitespace-nowrap"
      ]
    }
  },
  panelcontainer: {
    class: [
      // Spacing
      "p-[1.125rem] pt-[0.875rem]",
      // Shape
      "border-0 rounded-none",
      "border-br-md border-bl-md",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-900 dark:text-surface-0/80"
    ]
  }
}, rc = {
  root: ({ props: e }) => ({
    class: [
      //Font
      "text-xs font-bold",
      //Alignments
      "inline-flex items-center justify-center",
      //Spacing
      "px-[0.4rem] py-1",
      //Shape
      {
        "rounded-md": !e.rounded,
        "rounded-full": e.rounded
      },
      //Colors
      {
        "bg-highlight": e.severity === null || e.severity === "primary",
        "text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-500/20": e.severity === "success",
        "text-surface-700 dark:text-surface-300 bg-surface-100 dark:bg-surface-500/20": e.severity === "secondary",
        "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/20": e.severity === "info",
        "text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/20": e.severity === "warn",
        "text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-500/20": e.severity === "danger",
        "text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0": e.severity === "contrast"
      }
    ]
  }),
  value: {
    class: "leading-normal"
  },
  icon: {
    class: "mr-1 text-sm"
  }
}, nc = {
  root: {
    class: [
      // Spacing
      "py-2 px-3",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-950 text-surface-700 dark:text-surface-0",
      "border border-surface-200 dark:border-surface-700",
      // Sizing & Overflow
      "h-72 overflow-auto"
    ]
  },
  container: {
    class: [
      // Flexbox
      "flex items-center"
    ]
  },
  prompt: {
    class: [
      // Color
      "text-surface-700 dark:text-surface-0"
    ]
  },
  response: {
    class: [
      // Color
      "text-surface-700 dark:text-surface-0"
    ]
  },
  command: {
    class: [
      // Color
      "text-surface-700 dark:text-surface-0"
    ]
  },
  commandtext: {
    class: [
      // Flexbox
      "flex-1 shrink grow-0",
      // Shape
      "border-0",
      // Spacing
      "p-0",
      // Color
      "bg-transparent text-inherit",
      // Outline
      "outline-none"
    ]
  }
}, oc = {
  root: ({ context: e, props: t, parent: r }) => {
    var n, o;
    return {
      class: [
        // Font
        "leading-none",
        // Spacing
        "m-0",
        "py-2 px-3",
        // Shape
        "rounded-md",
        // Colors
        "text-surface-800 dark:text-white/80",
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        { "bg-surface-0 dark:bg-surface-950": !e.disabled },
        "border",
        { "border-surface-300 dark:border-surface-600": !t.invalid },
        // Invalid State
        "invalid:focus:ring-danger-400",
        "invalid:hover:border-danger-400",
        { "border-danger-400 dark:border-danger-400": t.invalid },
        // States
        {
          "hover:border-surface-400 dark:hover:border-surface-600": !e.disabled && !t.invalid,
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-secondary-500 dark:focus:ring-secondary-400 focus:z-10": !e.disabled,
          "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
        },
        // Filled State *for FloatLabel
        { filled: ((n = r.instance) == null ? void 0 : n.$name) == "FloatLabel" && t.modelValue !== null && ((o = t.modelValue) == null ? void 0 : o.length) !== 0 },
        // Misc
        "appearance-none",
        "transition-colors duration-200"
      ]
    };
  }
}, sc = {
  root: {
    class: [
      // Shape
      "rounded-md",
      // Size
      "min-w-[12rem]",
      "p-1",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  rootList: {
    class: [
      // Spacings and Shape
      "list-none",
      "flex flex-col",
      "m-0 p-0",
      "outline-none"
    ]
  },
  item: {
    class: "relative my-[2px] [&:first-child]:mt-0"
  },
  itemContent: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  itemIcon: {
    class: [
      // Spacing
      "mr-2"
    ]
  },
  itemLabel: {
    class: ["leading-none"]
  },
  submenuIcon: {
    class: [
      // Position
      "ml-auto"
    ]
  },
  submenu: {
    class: [
      // Spacing
      "flex flex-col",
      "m-0",
      "p-1",
      "list-none",
      "min-w-[12.5rem]",
      // Shape
      "shadow-none sm:shadow-md",
      "border border-surface-200 dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-250"
  }
}, ac = {
  root: ({ props: e }) => ({
    class: [
      "flex grow",
      {
        "flex-col": e.layout === "vertical",
        "flex-row": e.layout === "horizontal"
      }
    ]
  }),
  event: ({ props: e, context: t }) => ({
    class: [
      "flex relative min-h-[70px]",
      {
        "flex-row-reverse": e.align === "right" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 1,
        "flex-col [&:not(:last-child)]:flex-1": e.layout === "horizontal",
        "flex-col-reverse ": e.align === "bottom" || e.layout === "horizontal" && e.align === "alternate" && t.index % 2 === 1
      }
    ]
  }),
  eventOpposite: ({ props: e, context: t }) => ({
    class: [
      "flex-1",
      {
        "px-4": e.layout === "vertical",
        "py-4": e.layout === "horizontal"
      },
      {
        "text-right": e.align === "left" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 0,
        "text-left": e.align === "right" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 1
      }
    ]
  }),
  eventSeparator: ({ props: e }) => ({
    class: [
      "flex items-center flex-initial",
      {
        "flex-col": e.layout === "vertical",
        "flex-row": e.layout === "horizontal"
      }
    ]
  }),
  eventMarker: {
    class: [
      "relative",
      // Display & Flexbox
      "inline-flex items-center justify-center",
      // Size
      "w-[1.125rem] h-[1.125rem]",
      // Appearance
      "rounded-full border-2 border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-950",
      // Before
      "before:rounded-full before:w-[0.375rem] before:h-[0.375rem] before:bg-primary",
      // After
      "after:absolute after:rounded-full after:w-full after:h-full after:shadow-sm"
    ]
  },
  eventConnector: ({ props: e }) => ({
    class: [
      "grow bg-surface-300 dark:bg-surface-700",
      {
        "w-[2px]": e.layout === "vertical",
        "w-full h-[2px]": e.layout === "horizontal"
      }
    ]
  }),
  eventContent: ({ props: e, context: t }) => ({
    class: [
      "flex-1",
      {
        "px-4": e.layout === "vertical",
        "py-4": e.layout === "horizontal"
      },
      {
        "text-left": e.align === "left" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 0,
        "text-right": e.align === "right" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 1
      },
      {
        "min-h-0": e.layout === "vertical" && t.index === t.count - 1,
        "grow-0": e.layout === "horizontal" && t.index === t.count - 1
      }
    ]
  })
}, ic = {
  root: ({ props: e }) => ({
    class: [
      //Size and Shape
      "w-96 rounded-md",
      // Positioning
      { "-translate-x-2/4": e.position == "top-center" || e.position == "bottom-center" }
    ]
  }),
  message: ({ props: e }) => ({
    class: [
      "mb-4 rounded-md w-full",
      "border border-transparent",
      "backdrop-blur-[10px] shadow-md",
      // Colors
      {
        "bg-blue-50/90 dark:bg-blue-500/20": e.message.severity == "info",
        "bg-green-50/90 dark:bg-green-500/20": e.message.severity == "success",
        "bg-surface-50 dark:bg-surface-800": e.message.severity == "secondary",
        "bg-orange-50/90 dark:bg-orange-500/20": e.message.severity == "warn",
        "bg-red-50/90 dark:bg-red-500/20": e.message.severity == "error",
        "bg-surface-950 dark:bg-surface-0": e.message.severity == "contrast"
      },
      {
        "border-blue-200 dark:border-blue-500/20": e.message.severity == "info",
        "border-green-200 dark:border-green-500/20": e.message.severity == "success",
        "border-surface-300 dark:border-surface-500/20": e.message.severity == "secondary",
        "border-orange-200 dark:border-orange-500/20": e.message.severity == "warn",
        "border-red-200 dark:border-red-500/20": e.message.severity == "error",
        "border-surface-950 dark:border-surface-0": e.message.severity == "contrast"
      },
      {
        "text-blue-700 dark:text-blue-300": e.message.severity == "info",
        "text-green-700 dark:text-green-300": e.message.severity == "success",
        "text-surface-700 dark:text-surface-300": e.message.severity == "secondary",
        "text-orange-700 dark:text-orange-300": e.message.severity == "warn",
        "text-red-700 dark:text-red-300": e.message.severity == "error",
        "text-surface-0 dark:text-surface-950": e.message.severity == "contrast"
      }
    ]
  }),
  messageContent: ({ props: e }) => ({
    class: [
      "flex p-3",
      {
        "items-start": e.message.summary,
        "items-center": !e.message.summary
      }
    ]
  }),
  messageIcon: ({ props: e }) => ({
    class: [
      // Sizing and Spacing
      e.message.severity === "contrast" || e.message.severity === "secondary" ? "w-0" : "w-[1.125rem] h-[1.125rem] mr-2",
      "text-lg leading-[normal]"
    ]
  }),
  messageText: {
    class: [
      // Font and Text
      "text-base leading-[normal]",
      "ml-2",
      "flex-1"
    ]
  },
  summary: {
    class: "font-medium block"
  },
  detail: ({ props: e }) => ({
    class: ["block", "text-sm", e.message.severity === "contrast" ? "text-surface-0 dark:text-surface-950" : "text-surface-700 dark:text-surface-0", { "mt-2": e.message.summary }]
  }),
  closeButton: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-7 h-7",
      // Spacing and Misc
      "ml-auto  relative",
      // Shape
      "rounded-full",
      // Colors
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      {
        "focus:ring-blue-500 dark:focus:ring-blue-400": e.severity == "info",
        "focus:ring-green-500 dark:focus:ring-green-400": e.severity == "success",
        "focus:ring-surface-500 dark:focus:ring-surface-400": e.severity == "secondary",
        "focus:ring-orange-500 dark:focus:ring-orange-400": e.severity == "warn",
        "focus:ring-red-500 dark:focus:ring-red-4000": e.severity == "error",
        "focus:ring-surface-0 dark:focus:ring-surface-950": e.severity == "contrast"
      },
      // Misc
      "overflow-hidden"
    ]
  }),
  transition: {
    enterFromClass: "opacity-0 translate-y-2/4",
    enterActiveClass: "transition-[transform,opacity] duration-300",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden",
    leaveToClass: "max-h-0 opacity-0 mb-0"
  }
}, lc = {
  root: ({ props: e, context: t }) => ({
    class: [
      "relative",
      // Alignment
      "flex items-center justify-center",
      "py-2 px-4",
      "rounded-md border",
      // Color
      "bg-surface-100 dark:bg-surface-950",
      {
        "text-surface-600 dark:text-white/60 before:bg-transparent": !t.active,
        "text-surface-800 dark:text-white/80 before:bg-surface-0 dark:before:bg-surface-800": t.active
      },
      // States
      {
        "hover:text-surface-800 dark:hover:text-white/80": !e.disabled && !e.modelValue,
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-secondary-400": !e.disabled
      },
      // Invalid State
      {
        "border-red-500 dark:border-red-400": e.invalid,
        "border-surface-100 dark:border-surface-950": !e.invalid
      },
      // Before
      "before:absolute before:left-1 before:top-1 before:w-[calc(100%-0.5rem)] before:h-[calc(100%-0.5rem)] before:rounded-[4px] before:z-0",
      // Transitions
      "transition-all duration-200",
      // Misc
      { "cursor-pointer": !e.disabled, "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  content: "relative items-center inline-flex justify-center gap-2",
  label: "font-medium leading-[normal] text-center w-full z-10 relative",
  icon: "relative z-10 mr-2"
}, Ao = {
  root: ({ props: e }) => ({
    class: [
      "inline-block relative",
      "w-10 h-6",
      "rounded-2xl",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  slider: ({ props: e }) => ({
    class: [
      // Position
      "absolute top-0 left-0 right-0 bottom-0",
      { "before:transform before:translate-x-4": e.modelValue == e.trueValue },
      // Shape
      "rounded-2xl",
      // Before:
      "before:absolute before:top-1/2 before:left-1",
      "before:-mt-2",
      "before:h-4 before:w-4",
      "before:rounded-full",
      "before:duration-200",
      "before:bg-surface-0 before:dark:bg-surface-500",
      // Colors
      "border",
      {
        "bg-surface-300 dark:bg-surface-700": e.modelValue != e.trueValue,
        "bg-secondary-400": e.modelValue == e.trueValue,
        "before:dark:bg-surface-950": e.modelValue == e.trueValue,
        "border-transparent": !e.invalid
      },
      // Invalid State
      { "border-red-500 dark:border-danger-400": e.invalid },
      // States
      { "peer-hover:bg-surface-400 dark:peer-hover:bg-surface-600": e.modelValue != e.trueValue && !e.disabled && !e.invalid },
      { "peer-hover:bg-primary-hover": e.modelValue == e.trueValue && !e.disabled && !e.invalid },
      "peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-secondary-200",
      // Transition
      "transition-colors duration-200",
      // Misc
      "cursor-pointer"
    ]
  }),
  input: {
    class: [
      "peer",
      // Size
      "w-full ",
      "h-full",
      // Position
      "absolute",
      "top-0 left-0",
      "z-10",
      // Spacing
      "p-0",
      "m-0",
      // Shape
      "opacity-0",
      "rounded-2xl",
      "outline-none",
      // Misc
      "appearance-none",
      "cursor-pointer"
    ]
  }
}, cc = {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-between flex-wrap",
      "gap-2",
      // Spacing
      "p-3",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  start: {
    class: "flex items-center"
  },
  center: {
    class: "flex items-center"
  },
  end: {
    class: "flex items-center"
  }
}, uc = {
  root: ({ context: e }) => ({
    class: [
      // Position and Shadows
      "absolute",
      "p-fadein",
      // Spacing
      {
        '[&[data-p-position="top"]]:py-1 [&[data-p-position="top"]]:px-0 py-0 px-1': (e == null ? void 0 : e.right) || (e == null ? void 0 : e.left) || !(e != null && e.right) && !(e != null && e.left) && !(e != null && e.top) && !(e != null && e.bottom),
        "py-1 px-0": (e == null ? void 0 : e.top) || (e == null ? void 0 : e.bottom)
      },
      // Flipped Tooltip Arrow
      '[&[data-p-position="top"]>[data-pc-section=arrow]]:border-x-[10px] [&[data-p-position="top"]>[data-pc-section=arrow]]:border-t-[10px] [&[data-p-position="top"]>[data-pc-section=arrow]]:border-b-0 [&[data-p-position="top"]>[data-pc-section=arrow]]:border-t-surface-700 [&[data-p-position="top"]>[data-pc-section=arrow]]:border-y-0 [&[data-p-position="top"]>[data-pc-section=arrow]]:border-x-transparent',
      '[&[data-p-position="top"]>[data-pc-section=arrow]]:-ml-[10px] [&[data-p-position="top"]>[data-pc-section=arrow]]:left-1/2 [&[data-p-position="top"]>[data-pc-section=arrow]]:mt-auto [&[data-p-position="top"]>[data-pc-section=arrow]]:top-auto'
    ]
  }),
  arrow: ({ context: e }) => ({
    class: [
      // Position
      "absolute",
      // Size
      "w-0",
      "h-0",
      // Shape
      "border-transparent",
      "border-solid",
      {
        "border-y-[10px] border-r-[10px] border-l-0 border-r-surface-700": (e == null ? void 0 : e.right) || !(e != null && e.right) && !(e != null && e.left) && !(e != null && e.top) && !(e != null && e.bottom),
        "border-y-[10px] border-l-[10px] border-r-0 border-l-surface-700": e == null ? void 0 : e.left,
        "border-x-[10px] border-t-[10px] border-b-0 border-t-surface-700 ": e == null ? void 0 : e.top,
        "border-x-[10px] border-b-[10px] border-t-0 border-b-surface-700": e == null ? void 0 : e.bottom
      },
      // Spacing
      {
        "-mt-[10px] top-1/2": (e == null ? void 0 : e.right) || (e == null ? void 0 : e.left) || !(e != null && e.right) && !(e != null && e.left) && !(e != null && e.top) && !(e != null && e.bottom),
        "-ml-[10px] left-1/2": (e == null ? void 0 : e.top) || (e == null ? void 0 : e.bottom)
      }
    ]
  }),
  text: {
    class: ["p-3", "bg-surface-700", "text-white", "leading-none", "rounded-md", "whitespace-pre-line", "break-words", "shadow-md"]
  }
}, dc = {
  root: {
    class: [
      // Space
      "p-4",
      // Shape
      "rounded-md",
      "border-none",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "[&_[data-pc-name=pcfilter]]:w-full"
    ]
  },
  wrapper: {
    class: ["overflow-auto"]
  },
  container: {
    class: [
      // Spacing
      "m-0 p-0",
      // Misc
      "list-none overflow-auto"
    ]
  },
  node: {
    class: ["p-0 my-[2px] mx-0 first:mt-0", "rounded-md", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10"]
  },
  nodeContent: ({ context: e, props: t }) => ({
    class: [
      // Flex and Alignment
      "flex items-center",
      // Shape
      "rounded-md",
      // Spacing
      "py-1 px-2 gap-2",
      // Colors
      e.selected ? "bg-highlight text-highlight-contrast " : "bg-transparent text-surface-600 dark:text-white/70",
      // States
      { "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": (t.selectionMode == "single" || t.selectionMode == "multiple") && !e.selected },
      // Transition
      "transition-shadow duration-200",
      { "cursor-pointer select-none": t.selectionMode == "single" || t.selectionMode == "multiple" }
    ]
  }),
  nodeToggleButton: ({ context: e }) => ({
    class: [
      // Flex and Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "w-7 h-7",
      // Colors
      "bg-transparent",
      {
        "text-surface-600 dark:text-white/70": !e.selected,
        "text-highlight-contrast": e.selected,
        invisible: e.leaf
      },
      // States
      "hover:bg-surface-200/20 dark:hover:bg-surface-500/20",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200",
      // Misc
      "cursor-pointer select-none"
    ]
  }),
  nodeIcon: ({ context: e }) => ({
    class: [
      // Space
      "mr-2",
      // Color
      {
        "text-surface-600 dark:text-white/70": !e.selected,
        "text-highlight-contrast": e.selected
      }
    ]
  }),
  nodeLabel: ({ context: e }) => ({
    class: [
      {
        "text-surface-600 dark:text-white/70": !e.selected,
        "text-highlight-contrast": e.selected
      }
    ]
  }),
  nodeChildren: {
    class: ["m-0 list-none p-0 pl-4 [&:not(ul)]:pl-0 [&:not(ul)]:my-[2px]"]
  },
  loadingIcon: {
    class: ["text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin"]
  }
}, fc = {
  root: ({ props: e, state: t }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      "rounded-md",
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-700": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-600": !e.invalid },
      { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  labelContainer: {
    class: ["overflow-hidden flex flex-auto cursor-pointer"]
  },
  label: ({ props: e, parent: t }) => {
    var r, n, o, s;
    return {
      class: [
        "block leading-[normal]",
        // Space
        "py-2 px-3",
        // Color
        "text-surface-800 dark:text-white/80",
        {
          "placeholder:text-transparent dark:placeholder:text-transparent": ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel",
          "!text-transparent dark:!text-transparent": ((n = t.instance) == null ? void 0 : n.$name) == "FloatLabel" && e.modelValue == null || ((o = e.modelValue) == null ? void 0 : o.length) == 0
        },
        // Filled State *for FloatLabel
        { filled: ((s = t.instance) == null ? void 0 : s.$name) == "FloatLabel" && e.modelValue !== null },
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  panel: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md"
    ]
  },
  treeContainer: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, pc = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      {
        "flex flex-col h-full": e.scrollHeight === "flex"
      }
    ]
  }),
  mask: {
    class: [
      // Position
      "absolute",
      "top-0 left-0",
      "z-20",
      // Flex & Alignment
      "flex items-center justify-center",
      // Size
      "w-full h-full",
      // Color
      "bg-surface-100/40 dark:bg-surface-800/40",
      // Transition
      "transition duration-200"
    ]
  },
  loadingIcon: {
    class: "w-8 h-8 animate-spin"
  },
  tableContainer: ({ props: e }) => ({
    class: [
      // Overflow
      {
        "relative overflow-auto": e.scrollable,
        "overflow-x-auto": e.resizableColumns
      }
    ]
  }),
  header: ({ props: e }) => ({
    class: [
      "font-semibold",
      // Shape
      e.showGridlines ? "border-x border-t border-b-0" : "border-y border-x-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  }),
  footer: {
    class: [
      "font-semibold",
      // Shape
      "border-t-0 border-b border-x-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  },
  table: {
    class: [
      // Table & Width
      "border-collapse table-fixed w-full "
    ]
  },
  thead: ({ props: e }) => ({
    class: [
      // Position & Z-index
      {
        "top-0 z-40 sticky": e.scrollable
      }
    ]
  }),
  tbody: ({ props: e }) => ({
    class: [
      // Block Display
      {
        block: e.scrollable
      }
    ]
  }),
  tfoot: ({ props: e }) => ({
    class: [
      // Block Display
      {
        block: e.scrollable
      }
    ]
  }),
  headerRow: ({ props: e }) => ({
    class: [
      // Flexbox & Width
      {
        "flex flex-nowrap w-full": e.scrollable
      }
    ]
  }),
  row: ({ context: e, props: t }) => ({
    class: [
      // Flex
      { "flex flex-nowrap w-full": e.scrollable },
      // Color
      "text-surface-700 dark:text-white/80",
      { "bg-highlight": e.selected },
      { "bg-surface-0 text-surface-600 dark:bg-surface-900": !e.selected },
      // Hover & Flexbox
      {
        "hover:bg-surface-100 dark:bg-surface-800/50": e.selectable && !e.selected
      },
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 ring-inset dark:focus:ring-primary-400",
      // Transition
      { "transition duration-200": t.selectionMode && !e.selected || t.rowHover }
    ]
  }),
  headerCell: ({ context: e, props: t }) => ({
    class: [
      "font-semibold",
      "leading-[normal]",
      // Position
      { "sticky z-40": e.scrollable && e.scrollDirection === "both" && e.frozen },
      // Flex & Alignment
      {
        "flex flex-1 items-center": e.scrollable,
        "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
      },
      "text-left",
      // Shape
      { "first:border-l border-y border-r": e == null ? void 0 : e.showGridlines },
      "border-0 border-b border-solid",
      // Spacing
      (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
      // Color
      (t.sortable === "" || t.sortable) && e.sorted ? "bg-highlight" : "bg-surface-0 text-surface-700 dark:text-white/80 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      // States
      { "hover:bg-surface-100 dark:hover:bg-surface-80/50": (t.sortable === "" || t.sortable) && !(e != null && e.sorted) },
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transition
      { "transition duration-200": t.sortable === "" || t.sortable },
      // Misc
      {
        "overflow-hidden relative bg-clip-padding": e.resizable && !e.frozen
      }
    ]
  }),
  column: {
    headerCell: ({ context: e, props: t }) => ({
      class: [
        "font-semibold",
        "leading-[normal]",
        // Position
        { "sticky z-40": e.scrollable && e.scrollDirection === "both" && e.frozen },
        // Flex & Alignment
        {
          "flex flex-1 items-center": e.scrollable,
          "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
        },
        "text-left",
        // Shape
        { "first:border-l border-y border-r": e == null ? void 0 : e.showGridlines },
        "border-0 border-b border-solid",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
        // Color
        (t.sortable === "" || t.sortable) && e.sorted ? "bg-highlight" : "bg-surface-0 text-surface-700 dark:text-white/80 dark:bg-surface-900",
        "border-surface-200 dark:border-surface-700",
        // States
        { "hover:bg-surface-100 dark:hover:bg-surface-80/50": (t.sortable === "" || t.sortable) && !(e != null && e.sorted) },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        { "transition duration-200": t.sortable === "" || t.sortable },
        // Misc
        {
          "overflow-hidden relative bg-clip-padding": e.resizable && !e.frozen
        }
      ]
    }),
    bodyCell: ({ context: e }) => ({
      class: [
        // Font
        "leading-[normal]",
        // Position
        {
          sticky: e.scrollable && e.scrollDirection === "both" && e.frozen
        },
        // Flex & Alignment
        {
          "flex flex-1 items-center": e.scrollable,
          "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
        },
        "text-left",
        // Shape
        "border-0 border-b border-solid",
        "border-surface-200 dark:border-surface-700",
        {
          "border-x-0 border-l-0": !e.showGridlines
        },
        { "first:border-l border-r border-b": e == null ? void 0 : e.showGridlines },
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
        // Misc
        {
          "cursor-pointer": e.selectable,
          sticky: e.scrollable && e.scrollDirection === "both" && e.frozen,
          "border-x-0 border-l-0": !e.showGridlines
        }
      ]
    }),
    bodyCellContent: "flex items-center gap-2",
    rowToggleButton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left align-middle",
        // Spacing
        "m-0 mr-2 p-0",
        // Size
        "w-7 h-7",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-700 dark:text-white/70",
        "border-transparent",
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:text-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800/50",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    sortIcon: ({ context: e }) => ({
      class: ["ml-2 inline-block", e.sorted ? "text-inherit" : "fill-surface-700 dark:fill-white/70"]
    }),
    columnResizer: {
      class: [
        "block",
        // Position
        "absolute top-0 right-0",
        // Sizing
        "w-2 h-full",
        // Spacing
        "m-0 p-0",
        // Color
        "border border-transparent",
        // Misc
        "cursor-col-resize"
      ]
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  columnResizeIndicator: {
    class: "absolute hidden w-[2px] z-20 bg-primary"
  }
}, mc = {
  global: nl,
  directives: {
    badge: ji,
    ripple: jl,
    tooltip: uc
  },
  //forms
  autocomplete: Oi,
  select: Io,
  dropdown: Io,
  inputnumber: ul,
  inputtext: fl,
  datepicker: To,
  calendar: To,
  checkbox: Bi,
  radiobutton: Al,
  toggleswitch: Ao,
  inputswitch: Ao,
  selectbutton: Rl,
  slider: Ml,
  rating: Ll,
  multiselect: xl,
  togglebutton: lc,
  cascadeselect: Vi,
  listbox: ml,
  colorpicker: Hi,
  inputgroup: il,
  inputgroupaddon: ll,
  inputmask: cl,
  knob: pl,
  treeselect: fc,
  textarea: oc,
  password: Tl,
  iconfield: ol,
  floatlabel: tl,
  inputotp: dl,
  //buttons
  button: Ri,
  buttongroup: Ni,
  splitbutton: Vl,
  speeddial: Fl,
  //data
  paginator: Cl,
  datatable: Wi,
  tree: dc,
  dataview: qi,
  organizationchart: kl,
  orderlist: wl,
  picklist: Pl,
  treetable: pc,
  timeline: ac,
  //panels
  accordion: Si,
  accordionpanel: Pi,
  accordionheader: Ti,
  accordioncontent: $i,
  panel: Sl,
  fieldset: Xi,
  card: Mi,
  tabview: tc,
  divider: Ji,
  toolbar: cc,
  scrollpanel: El,
  splitter: Bl,
  splitterpanel: Dl,
  stepper: Wl,
  steplist: Kl,
  step: Hl,
  stepitem: Ul,
  steppanels: Gl,
  deferred: Zi,
  tab: Zl,
  tabs: ec,
  tablist: Yl,
  tabpanels: Xl,
  tabpanel: Ql,
  //file
  fileupload: el,
  //menu
  contextmenu: Gi,
  menu: gl,
  menubar: hl,
  steps: ql,
  tieredmenu: sc,
  breadcrumb: zi,
  panelmenu: $l,
  megamenu: bl,
  dock: Qi,
  tabmenu: Jl,
  //overlays
  dialog: Yi,
  popover: Oo,
  sidebar: Oo,
  drawer: Po,
  overlaypanel: Po,
  confirmpopup: Ki,
  confirmdialog: Ui,
  //messages
  message: vl,
  toast: ic,
  //media
  carousel: Fi,
  galleria: rl,
  image: sl,
  //misc
  badge: Li,
  overlaybadge: _l,
  avatar: Ii,
  avatargroup: Ai,
  tag: rc,
  chip: Di,
  progressbar: Ol,
  skeleton: Nl,
  scrolltop: zl,
  terminal: nc,
  blockui: Ei,
  metergroup: yl,
  inplace: al,
  progressspinner: Il
};
var bc = Object.defineProperty, Lo = Object.getOwnPropertySymbols, gc = Object.prototype.hasOwnProperty, hc = Object.prototype.propertyIsEnumerable, jo = (e, t, r) => t in e ? bc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, vc = (e, t) => {
  for (var r in t || (t = {}))
    gc.call(t, r) && jo(e, r, t[r]);
  if (Lo)
    for (var r of Lo(t))
      hc.call(t, r) && jo(e, r, t[r]);
  return e;
};
function zt(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Qn(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function ce(e) {
  return !zt(e);
}
function Qe(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Re(e, ...t) {
  return Qn(e) ? e(...t) : e;
}
function Oe(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function He(e) {
  return Oe(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function Xn(e, t = "", r = {}) {
  const n = He(t).split("."), o = n.shift();
  return o ? Qe(e) ? Xn(Re(e[Object.keys(e).find((s) => He(s) === o) || ""], r), n.join("."), r) : void 0 : Re(e, r);
}
function tn(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function Us(e) {
  return ce(e) && !isNaN(e);
}
function rt(e, t) {
  if (t) {
    const r = t.test(e);
    return t.lastIndex = 0, r;
  }
  return !1;
}
function yc(...e) {
  const t = (r = {}, n = {}) => {
    const o = vc({}, r);
    return Object.keys(n).forEach((s) => {
      Qe(n[s]) && s in r && Qe(r[s]) ? o[s] = t(r[s], n[s]) : o[s] = n[s];
    }), o;
  };
  return e.reduce((r, n, o) => o === 0 ? n : t(r, n), {});
}
function rr(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function xc(e) {
  return Oe(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Ks(e) {
  return Oe(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, r) => r === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function Eo(e) {
  return Oe(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function eo() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(t, r) {
      let n = e.get(t);
      return n ? n.push(r) : n = [r], e.set(t, n), this;
    },
    off(t, r) {
      let n = e.get(t);
      return n && n.splice(n.indexOf(r) >>> 0, 1), this;
    },
    emit(t, r) {
      let n = e.get(t);
      n && n.slice().map((o) => {
        o(r);
      });
    },
    clear() {
      e.clear();
    }
  };
}
var wc = Object.defineProperty, kc = Object.defineProperties, _c = Object.getOwnPropertyDescriptors, Gr = Object.getOwnPropertySymbols, Gs = Object.prototype.hasOwnProperty, Ws = Object.prototype.propertyIsEnumerable, zo = (e, t, r) => t in e ? wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ue = (e, t) => {
  for (var r in t || (t = {}))
    Gs.call(t, r) && zo(e, r, t[r]);
  if (Gr)
    for (var r of Gr(t))
      Ws.call(t, r) && zo(e, r, t[r]);
  return e;
}, hn = (e, t) => kc(e, _c(t)), Xe = (e, t) => {
  var r = {};
  for (var n in e)
    Gs.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Gr)
    for (var n of Gr(e))
      t.indexOf(n) < 0 && Ws.call(e, n) && (r[n] = e[n]);
  return r;
}, Cc = eo(), De = Cc;
function Ro(e, t) {
  tn(e) ? e.push(...t || []) : Qe(e) && Object.assign(e, t);
}
function Sc(e) {
  return Qe(e) && e.hasOwnProperty("value") && e.hasOwnProperty("type") ? e.value : e;
}
function No(e, t = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((n) => t.endsWith(n)) ? e : `${e}`.trim().split(" ").map((s) => Us(s) ? `${s}px` : s).join(" ");
}
function $c(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function In(e = "", t = "") {
  return $c(`${Oe(e, !1) && Oe(t, !1) ? `${e}-` : e}${t}`);
}
function qs(e = "", t = "") {
  return `--${In(e, t)}`;
}
function Zs(e, t = "", r = "", n = [], o) {
  if (Oe(e)) {
    const s = /{([^}]*)}/g, a = e.trim();
    if (rt(a, s)) {
      const i = a.replaceAll(s, (u) => {
        const p = u.replace(/{|}/g, "").split(".").filter((b) => !n.some((h) => rt(b, h)));
        return `var(${qs(r, Ks(p.join("-")))}${ce(o) ? `, ${o}` : ""})`;
      }), l = /(\d+\s+[\+\-\*\/]\s+\d+)/g, c = /var\([^)]+\)/g;
      return rt(i.replace(c, "0"), l) ? `calc(${i})` : i;
    }
    return No(a, t);
  } else if (Us(e))
    return No(e, t);
}
function Tc(e, t, r) {
  Oe(t, !1) && e.push(`${t}:${r};`);
}
function Vt(e, t) {
  return e ? `${e}{${t}}` : "";
}
var nr = (...e) => Pc(ne.getTheme(), ...e), Pc = (e = {}, t, r, n) => {
  if (t) {
    const { variable: o, options: s } = ne.defaults || {}, { prefix: a, transform: i } = (e == null ? void 0 : e.options) || s || {}, c = rt(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return n === "value" || zt(n) && i === "strict" ? ne.getTokenValue(t) : Zs(c, void 0, a, [o.excludedKeyRegex], r);
  }
  return "";
};
function Oc(e, t = {}) {
  const r = ne.defaults.variable, { prefix: n = r.prefix, selector: o = r.selector, excludedKeyRegex: s = r.excludedKeyRegex } = t, a = (c, u = "") => Object.entries(c).reduce(
    (f, [p, b]) => {
      const h = rt(p, s) ? In(u) : In(u, Ks(p)), _ = Sc(b);
      if (Qe(_)) {
        const { variables: A, tokens: j } = a(_, h);
        Ro(f.tokens, j), Ro(f.variables, A);
      } else
        f.tokens.push((n ? h.replace(`${n}-`, "") : h).replaceAll("-", ".")), Tc(f.variables, qs(h), Zs(_, h, n, [s]));
      return f;
    },
    { variables: [], tokens: [] }
  ), { variables: i, tokens: l } = a(e, n);
  return {
    value: i,
    tokens: l,
    declarations: i.join(""),
    css: Vt(o, i.join(""))
  };
}
var Ve = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const t = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
      return [e].flat().map((r) => {
        var n;
        return (n = t.map((o) => o.resolve(r)).find((o) => o.matched)) != null ? n : this.rules.custom.resolve(r);
      });
    }
  },
  _toVariables(e, t) {
    return Oc(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: r, set: n, defaults: o }) {
    var s, a, i, l, c, u, f;
    const { preset: p, options: b } = t;
    let h, _, A, j, L, v, T;
    if (ce(p) && b.transform !== "strict") {
      const { primitive: M, semantic: I, extend: G } = p, Y = I || {}, { colorScheme: R } = Y, B = Xe(Y, ["colorScheme"]), H = G || {}, { colorScheme: O } = H, J = Xe(H, ["colorScheme"]), se = R || {}, { dark: _e } = se, ae = Xe(se, ["dark"]), Q = O || {}, { dark: W } = Q, $e = Xe(Q, ["dark"]), Te = ce(M) ? this._toVariables({ primitive: M }, b) : {}, me = ce(B) ? this._toVariables({ semantic: B }, b) : {}, be = ce(ae) ? this._toVariables({ light: ae }, b) : {}, _t = ce(_e) ? this._toVariables({ dark: _e }, b) : {}, at = ce(J) ? this._toVariables({ semantic: J }, b) : {}, Pr = ce($e) ? this._toVariables({ light: $e }, b) : {}, it = ce(W) ? this._toVariables({ dark: W }, b) : {}, [Nt, Jt] = [(s = Te.declarations) != null ? s : "", Te.tokens], [Or, Ct] = [(a = me.declarations) != null ? a : "", me.tokens || []], [_o, d] = [(i = be.declarations) != null ? i : "", be.tokens || []], [m, g] = [(l = _t.declarations) != null ? l : "", _t.tokens || []], [w, y] = [(c = at.declarations) != null ? c : "", at.tokens || []], [k, $] = [(u = Pr.declarations) != null ? u : "", Pr.tokens || []], [C, S] = [(f = it.declarations) != null ? f : "", it.tokens || []];
      h = this.transformCSS(e, Nt, "light", "variable", b, n, o), _ = Jt;
      const x = this.transformCSS(e, `${Or}${_o}`, "light", "variable", b, n, o), P = this.transformCSS(e, `${m}`, "dark", "variable", b, n, o);
      A = `${x}${P}`, j = [.../* @__PURE__ */ new Set([...Ct, ...d, ...g])];
      const z = this.transformCSS(e, `${w}${k}color-scheme:light`, "light", "variable", b, n, o), E = this.transformCSS(e, `${C}color-scheme:dark`, "dark", "variable", b, n, o);
      L = `${z}${E}`, v = [.../* @__PURE__ */ new Set([...y, ...$, ...S])], T = Re(p.css, { dt: nr });
    }
    return {
      primitive: {
        css: h,
        tokens: _
      },
      semantic: {
        css: A,
        tokens: j
      },
      global: {
        css: L,
        tokens: v
      },
      style: T
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: r, params: n, set: o, defaults: s, selector: a }) {
    var i, l, c;
    let u, f, p;
    if (ce(t) && r.transform !== "strict") {
      const b = e.replace("-directive", ""), h = t, { colorScheme: _, extend: A, css: j } = h, L = Xe(h, ["colorScheme", "extend", "css"]), v = A || {}, { colorScheme: T } = v, M = Xe(v, ["colorScheme"]), I = _ || {}, { dark: G } = I, Y = Xe(I, ["dark"]), R = T || {}, { dark: B } = R, H = Xe(R, ["dark"]), O = ce(L) ? this._toVariables({ [b]: Ue(Ue({}, L), M) }, r) : {}, J = ce(Y) ? this._toVariables({ [b]: Ue(Ue({}, Y), H) }, r) : {}, se = ce(G) ? this._toVariables({ [b]: Ue(Ue({}, G), B) }, r) : {}, [_e, ae] = [(i = O.declarations) != null ? i : "", O.tokens || []], [Q, W] = [(l = J.declarations) != null ? l : "", J.tokens || []], [$e, Te] = [(c = se.declarations) != null ? c : "", se.tokens || []], me = this.transformCSS(b, `${_e}${Q}`, "light", "variable", r, o, s, a), be = this.transformCSS(b, $e, "dark", "variable", r, o, s, a);
      u = `${me}${be}`, f = [.../* @__PURE__ */ new Set([...ae, ...W, ...Te])], p = Re(j, { dt: nr });
    }
    return {
      css: u,
      tokens: f,
      style: p
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: r, set: n, defaults: o }) {
    var s;
    const { preset: a, options: i } = t, l = (s = a == null ? void 0 : a.components) == null ? void 0 : s[e];
    return this.getPreset({ name: e, preset: l, options: i, params: r, set: n, defaults: o });
  },
  getPresetD({ name: e = "", theme: t = {}, params: r, set: n, defaults: o }) {
    var s;
    const a = e.replace("-directive", ""), { preset: i, options: l } = t, c = (s = i == null ? void 0 : i.directives) == null ? void 0 : s[a];
    return this.getPreset({ name: a, preset: c, options: l, params: r, set: n, defaults: o });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, t) {
    var r;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : [];
  },
  getLayerOrder(e, t = {}, r, n) {
    const { cssLayer: o } = t;
    return o ? `@layer ${Re(o.order || "primeui", r)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: n = {}, set: o, defaults: s }) {
    const a = this.getCommon({ name: e, theme: t, params: r, set: o, defaults: s }), i = Object.entries(n).reduce((l, [c, u]) => l.push(`${c}="${u}"`) && l, []).join(" ");
    return Object.entries(a || {}).reduce((l, [c, u]) => {
      if (u != null && u.css) {
        const f = rr(u == null ? void 0 : u.css), p = `${c}-variables`;
        l.push(`<style type="text/css" data-primevue-style-id="${p}" ${i}>${f}</style>`);
      }
      return l;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: r, props: n = {}, set: o, defaults: s }) {
    var a;
    const i = { name: e, theme: t, params: r, set: o, defaults: s }, l = (a = e.includes("-directive") ? this.getPresetD(i) : this.getPresetC(i)) == null ? void 0 : a.css, c = Object.entries(n).reduce((u, [f, p]) => u.push(`${f}="${p}"`) && u, []).join(" ");
    return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${rr(l)}</style>` : "";
  },
  createTokens(e = {}, t, r = "", n = "", o = {}) {
    return Object.entries(e).forEach(([s, a]) => {
      const i = rt(s, t.variable.excludedKeyRegex) ? r : r ? `${r}.${Eo(s)}` : Eo(s), l = n ? `${n}.${s}` : s;
      Qe(a) ? this.createTokens(a, t, i, l, o) : (o[i] || (o[i] = {
        paths: [],
        computed(c, u = {}) {
          var f, p;
          return this.paths.length === 1 ? (f = this.paths[0]) == null ? void 0 : f.computed(this.paths[0].scheme, u.binding) : c && c !== "none" ? (p = this.paths.find((b) => b.scheme === c)) == null ? void 0 : p.computed(c, u.binding) : this.paths.map((b) => b.computed(b.scheme, u[b.scheme]));
        }
      }), o[i].paths.push({
        path: l,
        value: a,
        scheme: l.includes("colorScheme.light") ? "light" : l.includes("colorScheme.dark") ? "dark" : "none",
        computed(c, u = {}) {
          const f = /{([^}]*)}/g;
          let p = a;
          if (u.name = this.path, u.binding || (u.binding = {}), rt(a, f)) {
            const h = a.trim().replaceAll(f, (j) => {
              var L;
              const v = j.replace(/{|}/g, ""), T = (L = o[v]) == null ? void 0 : L.computed(c, u);
              return tn(T) && T.length === 2 ? `light-dark(${T[0].value},${T[1].value})` : T == null ? void 0 : T.value;
            }), _ = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, A = /var\([^)]+\)/g;
            p = rt(h.replace(A, "0"), _) ? `calc(${h})` : h;
          }
          return zt(u.binding) && delete u.binding, {
            colorScheme: c,
            path: this.path,
            paths: u,
            value: p.includes("undefined") ? void 0 : p
          };
        }
      }));
    }), o;
  },
  getTokenValue(e, t, r) {
    var n;
    const s = ((l) => l.split(".").filter((u) => !rt(u.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), a = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, i = [(n = e[s]) == null ? void 0 : n.computed(a)].flat().filter((l) => l);
    return i.length === 1 ? i[0].value : i.reduce((l = {}, c) => {
      const u = c, { colorScheme: f } = u, p = Xe(u, ["colorScheme"]);
      return l[f] = p, l;
    }, void 0);
  },
  getSelectorRule(e, t, r, n) {
    return r === "class" || r === "attr" ? Vt(ce(t) ? `${e}${t},${e} ${t}` : e, n) : Vt(e, ce(t) ? Vt(t, n) : n);
  },
  transformCSS(e, t, r, n, o = {}, s, a, i) {
    if (ce(t)) {
      const { cssLayer: l } = o;
      if (n !== "style") {
        const c = this.getColorSchemeOption(o, a);
        t = r === "dark" ? c.reduce((u, { type: f, selector: p }) => (ce(p) && (u += p.includes("[CSS]") ? p.replace("[CSS]", t) : this.getSelectorRule(p, i, f, t)), u), "") : Vt(i ?? ":root", t);
      }
      if (l) {
        const c = {
          name: "primeui"
        };
        Qe(l) && (c.name = Re(l.name, { name: e, type: n })), ce(c.name) && (t = Vt(`@layer ${c.name}`, t), s == null || s.layerNames(c.name));
      }
      return t;
    }
    return "";
  }
}, ne = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(e = {}) {
    const { theme: t } = e;
    t && (this._theme = hn(Ue({}, t), {
      options: Ue(Ue({}, this.defaults.options), t.options)
    }), this._tokens = Ve.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), De.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = hn(Ue({}, this.theme), { preset: e }), this._tokens = Ve.createTokens(e, this.defaults), this.clearLoadedStyleNames(), De.emit("preset:change", e), De.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = hn(Ue({}, this.theme), { options: e }), this.clearLoadedStyleNames(), De.emit("options:change", e), De.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return Ve.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return Ve.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ve.getPresetC(r);
  },
  getDirective(e = "", t) {
    const r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ve.getPresetD(r);
  },
  getCustomPreset(e = "", t, r, n) {
    const o = { name: e, preset: t, options: this.options, selector: r, params: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return Ve.getPreset(o);
  },
  getLayerOrderCSS(e = "") {
    return Ve.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, r = "style", n) {
    return Ve.transformCSS(e, t, n, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, r = {}) {
    return Ve.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, r = {}) {
    return Ve.getStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), De.emit(`theme:${t}:load`, e), !this._loadingStyles.size && De.emit("theme:load"));
  }
};
function Ic(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function Ac(e, t) {
  if (e && t) {
    const r = (n) => {
      Ic(e, n) || (e.classList ? e.classList.add(n) : e.className += " " + n);
    };
    [t].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(r));
  }
}
function vn(e, t) {
  if (e && t) {
    const r = (n) => {
      e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(r));
  }
}
function Lc(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function rn(e) {
  return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Wr(e, t = {}) {
  if (rn(e)) {
    const r = (n, o) => {
      var s, a;
      const i = (s = e == null ? void 0 : e.$attrs) != null && s[n] ? [(a = e == null ? void 0 : e.$attrs) == null ? void 0 : a[n]] : [];
      return [o].flat().reduce((l, c) => {
        if (c != null) {
          const u = typeof c;
          if (u === "string" || u === "number")
            l.push(c);
          else if (u === "object") {
            const f = Array.isArray(c) ? r(n, c) : Object.entries(c).map(([p, b]) => n === "style" && (b || b === 0) ? `${p.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${b}` : b ? p : void 0);
            l = f.length ? l.concat(f.filter((p) => !!p)) : l;
          }
        }
        return l;
      }, i);
    };
    Object.entries(t).forEach(([n, o]) => {
      if (o != null) {
        const s = n.match(/^on(.+)/);
        s ? e.addEventListener(s[1].toLowerCase(), o) : n === "p-bind" ? Wr(e, o) : (o = n === "class" ? [...new Set(r("class", o))].join(" ").trim() : n === "style" ? r("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[n] = o), e.setAttribute(n, o));
      }
    });
  }
}
function jc(e, t = {}, ...r) {
  {
    const n = document.createElement(e);
    return Wr(n, t), n.append(...r), n;
  }
}
function Ec(e, t) {
  return rn(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function zc(e, t) {
  if (rn(e)) {
    const r = e.getAttribute(t);
    return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
  }
}
function Mo(e) {
  if (e) {
    let t = e.offsetHeight, r = getComputedStyle(e);
    return t -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), t;
  }
  return 0;
}
function Rc(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Nc(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Mc(e, t) {
  return e ? e.offsetHeight : 0;
}
function Fc(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Rc(e));
}
function Fo(e) {
  if (e) {
    let t = e.offsetWidth, r = getComputedStyle(e);
    return t -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), t;
  }
  return 0;
}
function to() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ys(e, t = "", r) {
  rn(e) && r !== null && r !== void 0 && e.setAttribute(t, r);
}
var Ir = {};
function Js(e = "pui_id_") {
  return Ir.hasOwnProperty(e) || (Ir[e] = 0), Ir[e]++, `${e}${Ir[e]}`;
}
function Vc() {
  let e = [];
  const t = (a, i, l = 999) => {
    const c = o(a, i, l), u = c.value + (c.key === a ? 0 : l) + 1;
    return e.push({ key: a, value: u }), u;
  }, r = (a) => {
    e = e.filter((i) => i.value !== a);
  }, n = (a, i) => o(a).value, o = (a, i, l = 0) => [...e].reverse().find((c) => !0) || { key: a, value: l }, s = (a) => a && parseInt(a.style.zIndex, 10) || 0;
  return {
    get: s,
    set: (a, i, l) => {
      i && (i.style.zIndex = String(t(a, !0, l)));
    },
    clear: (a) => {
      a && (r(s(a)), a.style.zIndex = "");
    },
    getCurrent: (a) => n(a)
  };
}
var yn = Vc(), xe = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
  const r = new Set(e.split(","));
  return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const ue = {}, Ut = [], Ne = () => {
}, Bc = () => !1, nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), no = (e) => e.startsWith("onUpdate:"), ye = Object.assign, oo = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, Dc = Object.prototype.hasOwnProperty, Z = (e, t) => Dc.call(e, t), N = Array.isArray, Kt = (e) => on(e) === "[object Map]", Qs = (e) => on(e) === "[object Set]", V = (e) => typeof e == "function", fe = (e) => typeof e == "string", xt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", Xs = (e) => (de(e) || V(e)) && V(e.then) && V(e.catch), ea = Object.prototype.toString, on = (e) => ea.call(e), Hc = (e) => on(e).slice(8, -1), ta = (e) => on(e) === "[object Object]", so = (e) => fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, or = /* @__PURE__ */ ro(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), sn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, Uc = /-(\w)/g, Ge = sn((e) => e.replace(Uc, (t, r) => r ? r.toUpperCase() : "")), Kc = /\B([A-Z])/g, Rt = sn(
  (e) => e.replace(Kc, "-$1").toLowerCase()
), an = sn((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = sn((e) => e ? `on${an(e)}` : ""), yt = (e, t) => !Object.is(e, t), wn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, ra = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Gc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wc = (e) => {
  const t = fe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vo;
const na = () => Vo || (Vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ln(e) {
  if (N(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = fe(n) ? Jc(n) : ln(n);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (fe(e) || de(e))
    return e;
}
const qc = /;(?![^(]*\))/g, Zc = /:([^]+)/, Yc = /\/\*[^]*?\*\//g;
function Jc(e) {
  const t = {};
  return e.replace(Yc, "").split(qc).forEach((r) => {
    if (r) {
      const n = r.split(Zc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Cr(e) {
  let t = "";
  if (fe(e))
    t = e;
  else if (N(e))
    for (let r = 0; r < e.length; r++) {
      const n = Cr(e[r]);
      n && (t += n + " ");
    }
  else if (de(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
function Qc(e) {
  if (!e) return null;
  let { class: t, style: r } = e;
  return t && !fe(t) && (e.class = Cr(t)), r && (e.style = ln(r)), e;
}
const Xc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", eu = /* @__PURE__ */ ro(Xc);
function oa(e) {
  return !!e || e === "";
}
const sa = (e) => !!(e && e.__v_isRef === !0), qr = (e) => fe(e) ? e : e == null ? "" : N(e) || de(e) && (e.toString === ea || !V(e.toString)) ? sa(e) ? qr(e.value) : JSON.stringify(e, aa, 2) : String(e), aa = (e, t) => sa(t) ? aa(e, t.value) : Kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, o], s) => (r[kn(n, s) + " =>"] = o, r),
    {}
  )
} : Qs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => kn(r))
} : xt(t) ? kn(t) : de(t) && !N(t) && !ta(t) ? String(t) : t, kn = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Be;
class tu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Be, !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = Be;
      try {
        return Be = this, t();
      } finally {
        Be = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Be = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Be = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function ru(e, t = Be) {
  t && t.active && t.effects.push(e);
}
function nu() {
  return Be;
}
let At;
class ao {
  constructor(t, r, n, o) {
    this.fn = t, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ru(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, wt();
      for (let t = 0; t < this._depsLength; t++) {
        const r = this.deps[t];
        if (r.computed && (ou(r.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), kt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ht, r = At;
    try {
      return ht = !0, At = this, this._runnings++, Bo(this), this.fn();
    } finally {
      Do(this), this._runnings--, At = r, ht = t;
    }
  }
  stop() {
    this.active && (Bo(this), Do(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function ou(e) {
  return e.value;
}
function Bo(e) {
  e._trackId++, e._depsLength = 0;
}
function Do(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      ia(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function ia(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let ht = !0, An = 0;
const la = [];
function wt() {
  la.push(ht), ht = !1;
}
function kt() {
  const e = la.pop();
  ht = e === void 0 ? !0 : e;
}
function io() {
  An++;
}
function lo() {
  for (An--; !An && Ln.length; )
    Ln.shift()();
}
function ca(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && ia(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Ln = [];
function ua(e, t, r) {
  io();
  for (const n of e.keys()) {
    let o;
    n._dirtyLevel < t && (o ?? (o = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (o ?? (o = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && Ln.push(n.scheduler)));
  }
  lo();
}
const da = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = t, r;
}, jn = /* @__PURE__ */ new WeakMap(), Lt = Symbol(""), En = Symbol("");
function Ie(e, t, r) {
  if (ht && At) {
    let n = jn.get(e);
    n || jn.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(r);
    o || n.set(r, o = da(() => n.delete(r))), ca(
      At,
      o
    );
  }
}
function nt(e, t, r, n, o, s) {
  const a = jn.get(e);
  if (!a)
    return;
  let i = [];
  if (t === "clear")
    i = [...a.values()];
  else if (r === "length" && N(e)) {
    const l = Number(n);
    a.forEach((c, u) => {
      (u === "length" || !xt(u) && u >= l) && i.push(c);
    });
  } else
    switch (r !== void 0 && i.push(a.get(r)), t) {
      case "add":
        N(e) ? so(r) && i.push(a.get("length")) : (i.push(a.get(Lt)), Kt(e) && i.push(a.get(En)));
        break;
      case "delete":
        N(e) || (i.push(a.get(Lt)), Kt(e) && i.push(a.get(En)));
        break;
      case "set":
        Kt(e) && i.push(a.get(Lt));
        break;
    }
  io();
  for (const l of i)
    l && ua(
      l,
      4
    );
  lo();
}
const su = /* @__PURE__ */ ro("__proto__,__v_isRef,__isVue"), fa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xt)
), Ho = /* @__PURE__ */ au();
function au() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const n = ee(this);
      for (let s = 0, a = this.length; s < a; s++)
        Ie(n, "get", s + "");
      const o = n[t](...r);
      return o === -1 || o === !1 ? n[t](...r.map(ee)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      wt(), io();
      const n = ee(this)[t].apply(this, r);
      return lo(), kt(), n;
    };
  }), e;
}
function iu(e) {
  xt(e) || (e = String(e));
  const t = ee(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class pa {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    const o = this._isReadonly, s = this._isShallow;
    if (r === "__v_isReactive")
      return !o;
    if (r === "__v_isReadonly")
      return o;
    if (r === "__v_isShallow")
      return s;
    if (r === "__v_raw")
      return n === (o ? s ? xu : ha : s ? ga : ba).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const a = N(t);
    if (!o) {
      if (a && Z(Ho, r))
        return Reflect.get(Ho, r, n);
      if (r === "hasOwnProperty")
        return iu;
    }
    const i = Reflect.get(t, r, n);
    return (xt(r) ? fa.has(r) : su(r)) || (o || Ie(t, "get", r), s) ? i : Ae(i) ? a && so(r) ? i : i.value : de(i) ? o ? fo(i) : un(i) : i;
  }
}
class ma extends pa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let s = t[r];
    if (!this._isShallow) {
      const l = jt(s);
      if (!Zt(n) && !jt(n) && (s = ee(s), n = ee(n)), !N(t) && Ae(s) && !Ae(n))
        return l ? !1 : (s.value = n, !0);
    }
    const a = N(t) && so(r) ? Number(r) < t.length : Z(t, r), i = Reflect.set(t, r, n, o);
    return t === ee(o) && (a ? yt(n, s) && nt(t, "set", r, n) : nt(t, "add", r, n)), i;
  }
  deleteProperty(t, r) {
    const n = Z(t, r);
    t[r];
    const o = Reflect.deleteProperty(t, r);
    return o && n && nt(t, "delete", r, void 0), o;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!xt(r) || !fa.has(r)) && Ie(t, "has", r), n;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      N(t) ? "length" : Lt
    ), Reflect.ownKeys(t);
  }
}
class lu extends pa {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const cu = /* @__PURE__ */ new ma(), uu = /* @__PURE__ */ new lu(), du = /* @__PURE__ */ new ma(
  !0
);
const co = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function Ar(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const o = ee(e), s = ee(t);
  r || (yt(t, s) && Ie(o, "get", t), Ie(o, "get", s));
  const { has: a } = cn(o), i = n ? co : r ? mo : ur;
  if (a.call(o, t))
    return i(e.get(t));
  if (a.call(o, s))
    return i(e.get(s));
  e !== o && e.get(t);
}
function Lr(e, t = !1) {
  const r = this.__v_raw, n = ee(r), o = ee(e);
  return t || (yt(e, o) && Ie(n, "has", e), Ie(n, "has", o)), e === o ? r.has(e) : r.has(e) || r.has(o);
}
function jr(e, t = !1) {
  return e = e.__v_raw, !t && Ie(ee(e), "iterate", Lt), Reflect.get(e, "size", e);
}
function Uo(e, t = !1) {
  !t && !Zt(e) && !jt(e) && (e = ee(e));
  const r = ee(this);
  return cn(r).has.call(r, e) || (r.add(e), nt(r, "add", e, e)), this;
}
function Ko(e, t, r = !1) {
  !r && !Zt(t) && !jt(t) && (t = ee(t));
  const n = ee(this), { has: o, get: s } = cn(n);
  let a = o.call(n, e);
  a || (e = ee(e), a = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), a ? yt(t, i) && nt(n, "set", e, t) : nt(n, "add", e, t), this;
}
function Go(e) {
  const t = ee(this), { has: r, get: n } = cn(t);
  let o = r.call(t, e);
  o || (e = ee(e), o = r.call(t, e)), n && n.call(t, e);
  const s = t.delete(e);
  return o && nt(t, "delete", e, void 0), s;
}
function Wo() {
  const e = ee(this), t = e.size !== 0, r = e.clear();
  return t && nt(e, "clear", void 0, void 0), r;
}
function Er(e, t) {
  return function(n, o) {
    const s = this, a = s.__v_raw, i = ee(a), l = t ? co : e ? mo : ur;
    return !e && Ie(i, "iterate", Lt), a.forEach((c, u) => n.call(o, l(c), l(u), s));
  };
}
function zr(e, t, r) {
  return function(...n) {
    const o = this.__v_raw, s = ee(o), a = Kt(s), i = e === "entries" || e === Symbol.iterator && a, l = e === "keys" && a, c = o[e](...n), u = r ? co : t ? mo : ur;
    return !t && Ie(
      s,
      "iterate",
      l ? En : Lt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: p } = c.next();
        return p ? { value: f, done: p } : {
          value: i ? [u(f[0]), u(f[1])] : u(f),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function lt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fu() {
  const e = {
    get(s) {
      return Ar(this, s);
    },
    get size() {
      return jr(this);
    },
    has: Lr,
    add: Uo,
    set: Ko,
    delete: Go,
    clear: Wo,
    forEach: Er(!1, !1)
  }, t = {
    get(s) {
      return Ar(this, s, !1, !0);
    },
    get size() {
      return jr(this);
    },
    has: Lr,
    add(s) {
      return Uo.call(this, s, !0);
    },
    set(s, a) {
      return Ko.call(this, s, a, !0);
    },
    delete: Go,
    clear: Wo,
    forEach: Er(!1, !0)
  }, r = {
    get(s) {
      return Ar(this, s, !0);
    },
    get size() {
      return jr(this, !0);
    },
    has(s) {
      return Lr.call(this, s, !0);
    },
    add: lt("add"),
    set: lt("set"),
    delete: lt("delete"),
    clear: lt("clear"),
    forEach: Er(!0, !1)
  }, n = {
    get(s) {
      return Ar(this, s, !0, !0);
    },
    get size() {
      return jr(this, !0);
    },
    has(s) {
      return Lr.call(this, s, !0);
    },
    add: lt("add"),
    set: lt("set"),
    delete: lt("delete"),
    clear: lt("clear"),
    forEach: Er(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = zr(s, !1, !1), r[s] = zr(s, !0, !1), t[s] = zr(s, !1, !0), n[s] = zr(
      s,
      !0,
      !0
    );
  }), [
    e,
    r,
    t,
    n
  ];
}
const [
  pu,
  mu,
  bu,
  gu
] = /* @__PURE__ */ fu();
function uo(e, t) {
  const r = t ? e ? gu : bu : e ? mu : pu;
  return (n, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    Z(r, o) && o in n ? r : n,
    o,
    s
  );
}
const hu = {
  get: /* @__PURE__ */ uo(!1, !1)
}, vu = {
  get: /* @__PURE__ */ uo(!1, !0)
}, yu = {
  get: /* @__PURE__ */ uo(!0, !1)
};
const ba = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), ha = /* @__PURE__ */ new WeakMap(), xu = /* @__PURE__ */ new WeakMap();
function wu(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ku(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : wu(Hc(e));
}
function un(e) {
  return jt(e) ? e : po(
    e,
    !1,
    cu,
    hu,
    ba
  );
}
function _u(e) {
  return po(
    e,
    !1,
    du,
    vu,
    ga
  );
}
function fo(e) {
  return po(
    e,
    !0,
    uu,
    yu,
    ha
  );
}
function po(e, t, r, n, o) {
  if (!de(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const a = ku(e);
  if (a === 0)
    return e;
  const i = new Proxy(
    e,
    a === 2 ? n : r
  );
  return o.set(e, i), i;
}
function sr(e) {
  return jt(e) ? sr(e.__v_raw) : !!(e && e.__v_isReactive);
}
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
function Zt(e) {
  return !!(e && e.__v_isShallow);
}
function va(e) {
  return e ? !!e.__v_raw : !1;
}
function ee(e) {
  const t = e && e.__v_raw;
  return t ? ee(t) : e;
}
function Cu(e) {
  return Object.isExtensible(e) && ra(e, "__v_skip", !0), e;
}
const ur = (e) => de(e) ? un(e) : e, mo = (e) => de(e) ? fo(e) : e;
class ya {
  constructor(t, r, n, o) {
    this.getter = t, this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ao(
      () => t(this._value),
      () => Hr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const t = ee(this);
    return (!t._cacheable || t.effect.dirty) && yt(t._value, t._value = t.effect.run()) && Hr(t, 4), xa(t), t.effect._dirtyLevel >= 2 && Hr(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Su(e, t, r = !1) {
  let n, o;
  const s = V(e);
  return s ? (n = e, o = Ne) : (n = e.get, o = e.set), new ya(n, o, s || !o, r);
}
function xa(e) {
  var t;
  ht && At && (e = ee(e), ca(
    At,
    (t = e.dep) != null ? t : e.dep = da(
      () => e.dep = void 0,
      e instanceof ya ? e : void 0
    )
  ));
}
function Hr(e, t = 4, r, n) {
  e = ee(e);
  const o = e.dep;
  o && ua(
    o,
    t
  );
}
function Ae(e) {
  return !!(e && e.__v_isRef === !0);
}
function bt(e) {
  return $u(e, !1);
}
function $u(e, t) {
  return Ae(e) ? e : new Tu(e, t);
}
class Tu {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : ee(t), this._value = r ? t : ur(t);
  }
  get value() {
    return xa(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || Zt(t) || jt(t);
    t = r ? t : ee(t), yt(t, this._rawValue) && (this._rawValue, this._rawValue = t, this._value = r ? t : ur(t), Hr(this, 4));
  }
}
function Ke(e) {
  return Ae(e) ? e.value : e;
}
const Pu = {
  get: (e, t, r) => Ke(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return Ae(o) && !Ae(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function wa(e) {
  return sr(e) ? e : new Proxy(e, Pu);
}
/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vt(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    dn(o, t, r);
  }
}
function Me(e, t, r, n) {
  if (V(e)) {
    const o = vt(e, t, r, n);
    return o && Xs(o) && o.catch((s) => {
      dn(s, t, r);
    }), o;
  }
  if (N(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(Me(e[s], t, r, n));
    return o;
  }
}
function dn(e, t, r, n = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const a = t.proxy, i = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, a, i) === !1)
            return;
      }
      s = s.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      wt(), vt(
        l,
        null,
        10,
        [e, a, i]
      ), kt();
      return;
    }
  }
  Ou(e, r, o, n);
}
function Ou(e, t, r, n = !0) {
  console.error(e);
}
let dr = !1, zn = !1;
const we = [];
let Ye = 0;
const Gt = [];
let dt = null, Pt = 0;
const ka = /* @__PURE__ */ Promise.resolve();
let bo = null;
function _a(e) {
  const t = bo || ka;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Iu(e) {
  let t = Ye + 1, r = we.length;
  for (; t < r; ) {
    const n = t + r >>> 1, o = we[n], s = fr(o);
    s < e || s === e && o.pre ? t = n + 1 : r = n;
  }
  return t;
}
function go(e) {
  (!we.length || !we.includes(
    e,
    dr && e.allowRecurse ? Ye + 1 : Ye
  )) && (e.id == null ? we.push(e) : we.splice(Iu(e.id), 0, e), Ca());
}
function Ca() {
  !dr && !zn && (zn = !0, bo = ka.then($a));
}
function Au(e) {
  const t = we.indexOf(e);
  t > Ye && we.splice(t, 1);
}
function Lu(e) {
  N(e) ? Gt.push(...e) : (!dt || !dt.includes(
    e,
    e.allowRecurse ? Pt + 1 : Pt
  )) && Gt.push(e), Ca();
}
function qo(e, t, r = dr ? Ye + 1 : 0) {
  for (; r < we.length; r++) {
    const n = we[r];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      we.splice(r, 1), r--, n();
    }
  }
}
function Sa(e) {
  if (Gt.length) {
    const t = [...new Set(Gt)].sort(
      (r, n) => fr(r) - fr(n)
    );
    if (Gt.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, Pt = 0; Pt < dt.length; Pt++) {
      const r = dt[Pt];
      r.active !== !1 && r();
    }
    dt = null, Pt = 0;
  }
}
const fr = (e) => e.id == null ? 1 / 0 : e.id, ju = (e, t) => {
  const r = fr(e) - fr(t);
  if (r === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return r;
};
function $a(e) {
  zn = !1, dr = !0, we.sort(ju);
  try {
    for (Ye = 0; Ye < we.length; Ye++) {
      const t = we[Ye];
      t && t.active !== !1 && vt(
        t,
        t.i,
        t.i ? 15 : 14
      );
    }
  } finally {
    Ye = 0, we.length = 0, Sa(), dr = !1, bo = null, (we.length || Gt.length) && $a();
  }
}
let ge = null, Ta = null;
function Zr(e) {
  const t = ge;
  return ge = e, Ta = e && e.type.__scopeId || null, t;
}
function Yr(e, t = ge, r) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && is(-1);
    const s = Zr(t);
    let a;
    try {
      a = e(...o);
    } finally {
      Zr(s), n._d && is(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Eu(e, t) {
  if (ge === null)
    return e;
  const r = gn(ge), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, a, i, l = ue] = t[o];
    s && (V(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && pt(a), n.push({
      dir: s,
      instance: r,
      value: a,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function St(e, t, r, n) {
  const o = e.dirs, s = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const i = o[a];
    s && (i.oldValue = s[a].value);
    let l = i.dir[n];
    l && (wt(), Me(l, r, 8, [
      e.el,
      i,
      e,
      t
    ]), kt());
  }
}
const Ft = Symbol("_leaveCb"), Rr = Symbol("_enterCb");
function zu() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ho(() => {
    e.isMounted = !0;
  }), ja(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ee = [Function, Array], Ru = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ee,
  onEnter: Ee,
  onAfterEnter: Ee,
  onEnterCancelled: Ee,
  // leave
  onBeforeLeave: Ee,
  onLeave: Ee,
  onAfterLeave: Ee,
  onLeaveCancelled: Ee,
  // appear
  onBeforeAppear: Ee,
  onAppear: Ee,
  onAfterAppear: Ee,
  onAppearCancelled: Ee
};
function Nu(e, t) {
  const { leavingVNodes: r } = e;
  let n = r.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), r.set(t.type, n)), n;
}
function Rn(e, t, r, n, o) {
  const {
    appear: s,
    mode: a,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: f,
    onBeforeLeave: p,
    onLeave: b,
    onAfterLeave: h,
    onLeaveCancelled: _,
    onBeforeAppear: A,
    onAppear: j,
    onAfterAppear: L,
    onAppearCancelled: v
  } = t, T = String(e.key), M = Nu(r, e), I = (R, B) => {
    R && Me(
      R,
      n,
      9,
      B
    );
  }, G = (R, B) => {
    const H = B[1];
    I(R, B), N(R) ? R.every((O) => O.length <= 1) && H() : R.length <= 1 && H();
  }, Y = {
    mode: a,
    persisted: i,
    beforeEnter(R) {
      let B = l;
      if (!r.isMounted)
        if (s)
          B = A || l;
        else
          return;
      R[Ft] && R[Ft](
        !0
        /* cancelled */
      );
      const H = M[T];
      H && Bt(e, H) && H.el[Ft] && H.el[Ft](), I(B, [R]);
    },
    enter(R) {
      let B = c, H = u, O = f;
      if (!r.isMounted)
        if (s)
          B = j || c, H = L || u, O = v || f;
        else
          return;
      let J = !1;
      const se = R[Rr] = (_e) => {
        J || (J = !0, _e ? I(O, [R]) : I(H, [R]), Y.delayedLeave && Y.delayedLeave(), R[Rr] = void 0);
      };
      B ? G(B, [R, se]) : se();
    },
    leave(R, B) {
      const H = String(e.key);
      if (R[Rr] && R[Rr](
        !0
        /* cancelled */
      ), r.isUnmounting)
        return B();
      I(p, [R]);
      let O = !1;
      const J = R[Ft] = (se) => {
        O || (O = !0, B(), se ? I(_, [R]) : I(h, [R]), R[Ft] = void 0, M[H] === e && delete M[H]);
      };
      M[H] = e, b ? G(b, [R, J]) : J();
    },
    clone(R) {
      return Rn(
        R,
        t,
        r,
        n
      );
    }
  };
  return Y;
}
function Jr(e, t) {
  e.shapeFlag & 6 && e.component ? Jr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pa(e, t = !1, r) {
  let n = [], o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const i = r == null ? a.key : String(r) + String(a.key != null ? a.key : s);
    a.type === he ? (a.patchFlag & 128 && o++, n = n.concat(
      Pa(a.children, t, i)
    )) : (t || a.type !== ot) && n.push(i != null ? Et(a, { key: i }) : a);
  }
  if (o > 1)
    for (let s = 0; s < n.length; s++)
      n[s].patchFlag = -2;
  return n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oa(e, t) {
  return V(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ye({ name: e.name }, t, { setup: e })
  ) : e;
}
const ar = (e) => !!e.type.__asyncLoader, Ia = (e) => e.type.__isKeepAlive;
function Mu(e, t) {
  Aa(e, "a", t);
}
function Fu(e, t) {
  Aa(e, "da", t);
}
function Aa(e, t, r = ve) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = r;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (fn(t, n, r), r) {
    let o = r.parent;
    for (; o && o.parent; )
      Ia(o.parent.vnode) && Vu(n, t, r, o), o = o.parent;
  }
}
function Vu(e, t, r, n) {
  const o = fn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ea(() => {
    oo(n[t], o);
  }, r);
}
function fn(e, t, r = ve, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []), s = t.__weh || (t.__weh = (...a) => {
      wt();
      const i = Sr(r), l = Me(t, r, e, a);
      return i(), kt(), l;
    });
    return n ? o.unshift(s) : o.push(s), s;
  }
}
const st = (e) => (t, r = ve) => {
  (!bn || e === "sp") && fn(e, (...n) => t(...n), r);
}, Bu = st("bm"), ho = st("m"), Du = st("bu"), La = st("u"), ja = st("bum"), Ea = st("um"), Hu = st("sp"), Uu = st(
  "rtg"
), Ku = st(
  "rtc"
);
function Gu(e, t = ve) {
  fn("ec", e, t);
}
const vo = "components", Wu = "directives";
function Zo(e, t) {
  return yo(vo, e, !0, t) || e;
}
const za = Symbol.for("v-ndc");
function Nr(e) {
  return fe(e) ? yo(vo, e, !1) || e : e || za;
}
function qu(e) {
  return yo(Wu, e);
}
function yo(e, t, r = !0, n = !1) {
  const o = ge || ve;
  if (o) {
    const s = o.type;
    if (e === vo) {
      const i = Vd(
        s,
        !1
      );
      if (i && (i === t || i === Ge(t) || i === an(Ge(t))))
        return s;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yo(o[e] || s[e], t) || // global registration
      Yo(o.appContext[e], t)
    );
    return !a && n ? s : a;
  }
}
function Yo(e, t) {
  return e && (e[t] || e[Ge(t)] || e[an(Ge(t))]);
}
function Ra(e, t, r, n) {
  let o;
  const s = r;
  if (N(e) || fe(e)) {
    o = new Array(e.length);
    for (let a = 0, i = e.length; a < i; a++)
      o[a] = t(e[a], a, void 0, s);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, s);
  } else if (de(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, i) => t(a, i, void 0, s)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let i = 0, l = a.length; i < l; i++) {
        const c = a[i];
        o[i] = t(e[c], c, i, s);
      }
    }
  else
    o = [];
  return o;
}
function Ot(e, t, r = {}, n, o) {
  if (ge.isCE || ge.parent && ar(ge.parent) && ge.parent.isCE)
    return t !== "default" && (r.name = t), ke("slot", r, n);
  let s = e[t];
  s && s._c && (s._d = !1), X();
  const a = s && Na(s(r)), i = Je(
    he,
    {
      key: (r.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      a && a.key || `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!a && n ? "_fb" : "")
    },
    a || [],
    a && e._ === 1 ? 64 : -2
  );
  return i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), s && s._c && (s._d = !0), i;
}
function Na(e) {
  return e.some((t) => oi(t) ? !(t.type === ot || t.type === he && !Na(t.children)) : !0) ? e : null;
}
const Nn = (e) => e ? ii(e) ? gn(e) : Nn(e.parent) : null, ir = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ye(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Nn(e.parent),
    $root: (e) => Nn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Fa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, go(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _a.bind(e.proxy)),
    $watch: (e) => xd.bind(e)
  })
), _n = (e, t) => e !== ue && !e.__isScriptSetup && Z(e, t), Zu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: o, props: s, accessCache: a, type: i, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const b = a[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return r[t];
          case 3:
            return s[t];
        }
      else {
        if (_n(n, t))
          return a[t] = 1, n[t];
        if (o !== ue && Z(o, t))
          return a[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && Z(c, t)
        )
          return a[t] = 3, s[t];
        if (r !== ue && Z(r, t))
          return a[t] = 4, r[t];
        Mn && (a[t] = 0);
      }
    }
    const u = ir[t];
    let f, p;
    if (u)
      return t === "$attrs" && Ie(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = i.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== ue && Z(r, t))
      return a[t] = 4, r[t];
    if (
      // global properties
      p = l.config.globalProperties, Z(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: o, ctx: s } = e;
    return _n(o, t) ? (o[t] = r, !0) : n !== ue && Z(n, t) ? (n[t] = r, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: s }
  }, a) {
    let i;
    return !!r[a] || e !== ue && Z(e, a) || _n(t, a) || (i = s[0]) && Z(i, a) || Z(n, a) || Z(ir, a) || Z(o.config.globalProperties, a);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Z(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Jo(e) {
  return N(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Mn = !0;
function Yu(e) {
  const t = Fa(e), r = e.proxy, n = e.ctx;
  Mn = !1, t.beforeCreate && Qo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: a,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: f,
    mounted: p,
    beforeUpdate: b,
    updated: h,
    activated: _,
    deactivated: A,
    beforeDestroy: j,
    beforeUnmount: L,
    destroyed: v,
    unmounted: T,
    render: M,
    renderTracked: I,
    renderTriggered: G,
    errorCaptured: Y,
    serverPrefetch: R,
    // public API
    expose: B,
    inheritAttrs: H,
    // assets
    components: O,
    directives: J,
    filters: se
  } = t;
  if (c && Ju(c, n, null), a)
    for (const Q in a) {
      const W = a[Q];
      V(W) && (n[Q] = W.bind(r));
    }
  if (o) {
    const Q = o.call(r, r);
    de(Q) && (e.data = un(Q));
  }
  if (Mn = !0, s)
    for (const Q in s) {
      const W = s[Q], $e = V(W) ? W.bind(r, r) : V(W.get) ? W.get.bind(r, r) : Ne, Te = !V(W) && V(W.set) ? W.set.bind(r) : Ne, me = Dd({
        get: $e,
        set: Te
      });
      Object.defineProperty(n, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (be) => me.value = be
      });
    }
  if (i)
    for (const Q in i)
      Ma(i[Q], n, r, Q);
  if (l) {
    const Q = V(l) ? l.call(r) : l;
    Reflect.ownKeys(Q).forEach((W) => {
      nd(W, Q[W]);
    });
  }
  u && Qo(u, e, "c");
  function ae(Q, W) {
    N(W) ? W.forEach(($e) => Q($e.bind(r))) : W && Q(W.bind(r));
  }
  if (ae(Bu, f), ae(ho, p), ae(Du, b), ae(La, h), ae(Mu, _), ae(Fu, A), ae(Gu, Y), ae(Ku, I), ae(Uu, G), ae(ja, L), ae(Ea, T), ae(Hu, R), N(B))
    if (B.length) {
      const Q = e.exposed || (e.exposed = {});
      B.forEach((W) => {
        Object.defineProperty(Q, W, {
          get: () => r[W],
          set: ($e) => r[W] = $e
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === Ne && (e.render = M), H != null && (e.inheritAttrs = H), O && (e.components = O), J && (e.directives = J);
}
function Ju(e, t, r = Ne) {
  N(e) && (e = Fn(e));
  for (const n in e) {
    const o = e[n];
    let s;
    de(o) ? "default" in o ? s = qt(
      o.from || n,
      o.default,
      !0
    ) : s = qt(o.from || n) : s = qt(o), Ae(s) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (a) => s.value = a
    }) : t[n] = s;
  }
}
function Qo(e, t, r) {
  Me(
    N(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Ma(e, t, r, n) {
  const o = n.includes(".") ? ti(r, n) : () => r[n];
  if (fe(e)) {
    const s = t[e];
    V(s) && gt(o, s);
  } else if (V(e))
    gt(o, e.bind(r));
  else if (de(e))
    if (N(e))
      e.forEach((s) => Ma(s, t, r, n));
    else {
      const s = V(e.handler) ? e.handler.bind(r) : t[e.handler];
      V(s) && gt(o, s, e);
    }
}
function Fa(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: a }
  } = e.appContext, i = s.get(t);
  let l;
  return i ? l = i : !o.length && !r && !n ? l = t : (l = {}, o.length && o.forEach(
    (c) => Qr(l, c, a, !0)
  ), Qr(l, t, a)), de(t) && s.set(t, l), l;
}
function Qr(e, t, r, n = !1) {
  const { mixins: o, extends: s } = t;
  s && Qr(e, s, r, !0), o && o.forEach(
    (a) => Qr(e, a, r, !0)
  );
  for (const a in t)
    if (!(n && a === "expose")) {
      const i = Qu[a] || r && r[a];
      e[a] = i ? i(e[a], t[a]) : t[a];
    }
  return e;
}
const Qu = {
  data: Xo,
  props: es,
  emits: es,
  // objects
  methods: er,
  computed: er,
  // lifecycle
  beforeCreate: Se,
  created: Se,
  beforeMount: Se,
  mounted: Se,
  beforeUpdate: Se,
  updated: Se,
  beforeDestroy: Se,
  beforeUnmount: Se,
  destroyed: Se,
  unmounted: Se,
  activated: Se,
  deactivated: Se,
  errorCaptured: Se,
  serverPrefetch: Se,
  // assets
  components: er,
  directives: er,
  // watch
  watch: ed,
  // provide / inject
  provide: Xo,
  inject: Xu
};
function Xo(e, t) {
  return t ? e ? function() {
    return ye(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xu(e, t) {
  return er(Fn(e), Fn(t));
}
function Fn(e) {
  if (N(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function er(e, t) {
  return e ? ye(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function es(e, t) {
  return e ? N(e) && N(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ye(
    /* @__PURE__ */ Object.create(null),
    Jo(e),
    Jo(t ?? {})
  ) : t;
}
function ed(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = ye(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Se(e[n], t[n]);
  return r;
}
function Va() {
  return {
    app: null,
    config: {
      isNativeTag: Bc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let td = 0;
function rd(e, t) {
  return function(n, o = null) {
    V(n) || (n = ye({}, n)), o != null && !de(o) && (o = null);
    const s = Va(), a = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = s.app = {
      _uid: td++,
      _component: n,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Hd,
      get config() {
        return s.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return a.has(c) || (c && V(c.install) ? (a.add(c), c.install(l, ...u)) : V(c) && (a.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (s.components[c] = u, l) : s.components[c];
      },
      directive(c, u) {
        return u ? (s.directives[c] = u, l) : s.directives[c];
      },
      mount(c, u, f) {
        if (!i) {
          const p = ke(n, o);
          return p.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, c, f), i = !0, l._container = c, c.__vue_app__ = l, gn(p.component);
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return s.provides[c] = u, l;
      },
      runWithContext(c) {
        const u = Wt;
        Wt = l;
        try {
          return c();
        } finally {
          Wt = u;
        }
      }
    };
    return l;
  };
}
let Wt = null;
function nd(e, t) {
  if (ve) {
    let r = ve.provides;
    const n = ve.parent && ve.parent.provides;
    n === r && (r = ve.provides = Object.create(n)), r[e] = t;
  }
}
function qt(e, t, r = !1) {
  const n = ve || ge;
  if (n || Wt) {
    const o = Wt ? Wt._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return r && V(t) ? t.call(n && n.proxy) : t;
  }
}
const Ba = {}, Da = () => Object.create(Ba), Ha = (e) => Object.getPrototypeOf(e) === Ba;
function od(e, t, r, n = !1) {
  const o = {}, s = Da();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ua(e, t, o, s);
  for (const a in e.propsOptions[0])
    a in o || (o[a] = void 0);
  r ? e.props = n ? o : _u(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function sd(e, t, r, n) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: a }
  } = e, i = ee(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || a > 0) && !(a & 16)
  ) {
    if (a & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let p = u[f];
        if (pn(e.emitsOptions, p))
          continue;
        const b = t[p];
        if (l)
          if (Z(s, p))
            b !== s[p] && (s[p] = b, c = !0);
          else {
            const h = Ge(p);
            o[h] = Vn(
              l,
              i,
              h,
              b,
              e,
              !1
            );
          }
        else
          b !== s[p] && (s[p] = b, c = !0);
      }
    }
  } else {
    Ua(e, t, o, s) && (c = !0);
    let u;
    for (const f in i)
      (!t || // for camelCase
      !Z(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Rt(f)) === f || !Z(t, u))) && (l ? r && // for camelCase
      (r[f] !== void 0 || // for kebab-case
      r[u] !== void 0) && (o[f] = Vn(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== i)
      for (const f in s)
        (!t || !Z(t, f)) && (delete s[f], c = !0);
  }
  c && nt(e.attrs, "set", "");
}
function Ua(e, t, r, n) {
  const [o, s] = e.propsOptions;
  let a = !1, i;
  if (t)
    for (let l in t) {
      if (or(l))
        continue;
      const c = t[l];
      let u;
      o && Z(o, u = Ge(l)) ? !s || !s.includes(u) ? r[u] = c : (i || (i = {}))[u] = c : pn(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, a = !0);
    }
  if (s) {
    const l = ee(r), c = i || ue;
    for (let u = 0; u < s.length; u++) {
      const f = s[u];
      r[f] = Vn(
        o,
        l,
        f,
        c[f],
        e,
        !Z(c, f)
      );
    }
  }
  return a;
}
function Vn(e, t, r, n, o, s) {
  const a = e[r];
  if (a != null) {
    const i = Z(a, "default");
    if (i && n === void 0) {
      const l = a.default;
      if (a.type !== Function && !a.skipFactory && V(l)) {
        const { propsDefaults: c } = o;
        if (r in c)
          n = c[r];
        else {
          const u = Sr(o);
          n = c[r] = l.call(
            null,
            t
          ), u();
        }
      } else
        n = l;
    }
    a[
      0
      /* shouldCast */
    ] && (s && !i ? n = !1 : a[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Rt(r)) && (n = !0));
  }
  return n;
}
const ad = /* @__PURE__ */ new WeakMap();
function Ka(e, t, r = !1) {
  const n = r ? ad : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const s = e.props, a = {}, i = [];
  let l = !1;
  if (!V(e)) {
    const u = (f) => {
      l = !0;
      const [p, b] = Ka(f, t, !0);
      ye(a, p), b && i.push(...b);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !l)
    return de(e) && n.set(e, Ut), Ut;
  if (N(s))
    for (let u = 0; u < s.length; u++) {
      const f = Ge(s[u]);
      ts(f) && (a[f] = ue);
    }
  else if (s)
    for (const u in s) {
      const f = Ge(u);
      if (ts(f)) {
        const p = s[u], b = a[f] = N(p) || V(p) ? { type: p } : ye({}, p), h = b.type;
        let _ = !1, A = !0;
        if (N(h))
          for (let j = 0; j < h.length; ++j) {
            const L = h[j], v = V(L) && L.name;
            if (v === "Boolean") {
              _ = !0;
              break;
            } else v === "String" && (A = !1);
          }
        else
          _ = V(h) && h.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = _, b[
          1
          /* shouldCastTrue */
        ] = A, (_ || Z(b, "default")) && i.push(f);
      }
    }
  const c = [a, i];
  return de(e) && n.set(e, c), c;
}
function ts(e) {
  return e[0] !== "$" && !or(e);
}
const Ga = (e) => e[0] === "_" || e === "$stable", xo = (e) => N(e) ? e.map(Ze) : [Ze(e)], id = (e, t, r) => {
  if (t._n)
    return t;
  const n = Yr((...o) => xo(t(...o)), r);
  return n._c = !1, n;
}, Wa = (e, t, r) => {
  const n = e._ctx;
  for (const o in e) {
    if (Ga(o)) continue;
    const s = e[o];
    if (V(s))
      t[o] = id(o, s, n);
    else if (s != null) {
      const a = xo(s);
      t[o] = () => a;
    }
  }
}, qa = (e, t) => {
  const r = xo(t);
  e.slots.default = () => r;
}, Za = (e, t, r) => {
  for (const n in t)
    (r || n !== "_") && (e[n] = t[n]);
}, ld = (e, t, r) => {
  const n = e.slots = Da();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Za(n, t, r), r && ra(n, "_", o, !0)) : Wa(t, n);
  } else t && qa(e, t);
}, cd = (e, t, r) => {
  const { vnode: n, slots: o } = e;
  let s = !0, a = ue;
  if (n.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? s = !1 : Za(o, t, r) : (s = !t.$stable, Wa(t, o)), a = t;
  } else t && (qa(e, t), a = { default: 1 });
  if (s)
    for (const i in o)
      !Ga(i) && a[i] == null && delete o[i];
};
function Bn(e, t, r, n, o = !1) {
  if (N(e)) {
    e.forEach(
      (p, b) => Bn(
        p,
        t && (N(t) ? t[b] : t),
        r,
        n,
        o
      )
    );
    return;
  }
  if (ar(n) && !o)
    return;
  const s = n.shapeFlag & 4 ? gn(n.component) : n.el, a = o ? null : s, { i, r: l } = e, c = t && t.r, u = i.refs === ue ? i.refs = {} : i.refs, f = i.setupState;
  if (c != null && c !== l && (fe(c) ? (u[c] = null, Z(f, c) && (f[c] = null)) : Ae(c) && (c.value = null)), V(l))
    vt(l, i, 12, [a, u]);
  else {
    const p = fe(l), b = Ae(l);
    if (p || b) {
      const h = () => {
        if (e.f) {
          const _ = p ? Z(f, l) ? f[l] : u[l] : l.value;
          o ? N(_) && oo(_, s) : N(_) ? _.includes(s) || _.push(s) : p ? (u[l] = [s], Z(f, l) && (f[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value));
        } else p ? (u[l] = a, Z(f, l) && (f[l] = a)) : b && (l.value = a, e.k && (u[e.k] = a));
      };
      a ? (h.id = -1, Pe(h, r)) : h();
    }
  }
}
const Ya = Symbol("_vte"), ud = (e) => e.__isTeleport, lr = (e) => e && (e.disabled || e.disabled === ""), rs = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ns = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Dn = (e, t) => {
  const r = e && e.to;
  return fe(r) ? t ? t(r) : null : r;
}, dd = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, r, n, o, s, a, i, l, c) {
    const {
      mc: u,
      pc: f,
      pbc: p,
      o: { insert: b, querySelector: h, createText: _, createComment: A }
    } = c, j = lr(t.props);
    let { shapeFlag: L, children: v, dynamicChildren: T } = t;
    if (e == null) {
      const M = t.el = _(""), I = t.anchor = _("");
      b(M, r, n), b(I, r, n);
      const G = t.target = Dn(t.props, h), Y = Qa(G, t, _, b);
      G && (a === "svg" || rs(G) ? a = "svg" : (a === "mathml" || ns(G)) && (a = "mathml"));
      const R = (B, H) => {
        L & 16 && u(
          v,
          B,
          H,
          o,
          s,
          a,
          i,
          l
        );
      };
      j ? R(r, I) : G && R(G, Y);
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const M = t.anchor = e.anchor, I = t.target = e.target, G = t.targetAnchor = e.targetAnchor, Y = lr(e.props), R = Y ? r : I, B = Y ? M : G;
      if (a === "svg" || rs(I) ? a = "svg" : (a === "mathml" || ns(I)) && (a = "mathml"), T ? (p(
        e.dynamicChildren,
        T,
        R,
        o,
        s,
        a,
        i
      ), wo(e, t, !0)) : l || f(
        e,
        t,
        R,
        B,
        o,
        s,
        a,
        i,
        !1
      ), j)
        Y ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mr(
          t,
          r,
          M,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const H = t.target = Dn(
          t.props,
          h
        );
        H && Mr(
          t,
          H,
          null,
          c,
          0
        );
      } else Y && Mr(
        t,
        I,
        G,
        c,
        1
      );
    }
    Ja(t);
  },
  remove(e, t, r, { um: n, o: { remove: o } }, s) {
    const {
      shapeFlag: a,
      children: i,
      anchor: l,
      targetStart: c,
      targetAnchor: u,
      target: f,
      props: p
    } = e;
    if (f && (o(c), o(u)), s && o(l), a & 16) {
      const b = s || !lr(p);
      for (let h = 0; h < i.length; h++) {
        const _ = i[h];
        n(
          _,
          t,
          r,
          b,
          !!_.dynamicChildren
        );
      }
    }
  },
  move: Mr,
  hydrate: fd
};
function Mr(e, t, r, { o: { insert: n }, m: o }, s = 2) {
  s === 0 && n(e.targetAnchor, t, r);
  const { el: a, anchor: i, shapeFlag: l, children: c, props: u } = e, f = s === 2;
  if (f && n(a, t, r), (!f || lr(u)) && l & 16)
    for (let p = 0; p < c.length; p++)
      o(
        c[p],
        t,
        r,
        2
      );
  f && n(i, t, r);
}
function fd(e, t, r, n, o, s, {
  o: { nextSibling: a, parentNode: i, querySelector: l, insert: c, createText: u }
}, f) {
  const p = t.target = Dn(
    t.props,
    l
  );
  if (p) {
    const b = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (lr(t.props))
        t.anchor = f(
          a(e),
          t,
          i(e),
          r,
          n,
          o,
          s
        ), t.targetStart = b, t.targetAnchor = b && a(b);
      else {
        t.anchor = a(e);
        let h = b;
        for (; h; ) {
          if (h && h.nodeType === 8) {
            if (h.data === "teleport start anchor")
              t.targetStart = h;
            else if (h.data === "teleport anchor") {
              t.targetAnchor = h, p._lpa = t.targetAnchor && a(t.targetAnchor);
              break;
            }
          }
          h = a(h);
        }
        t.targetAnchor || Qa(p, t, u, c), f(
          b && a(b),
          t,
          p,
          r,
          n,
          o,
          s
        );
      }
    Ja(t);
  }
  return t.anchor && a(t.anchor);
}
const pd = dd;
function Ja(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let r = e.children[0].el;
    for (; r && r !== e.targetAnchor; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", t.uid), r = r.nextSibling;
    t.ut();
  }
}
function Qa(e, t, r, n) {
  const o = t.targetStart = r(""), s = t.targetAnchor = r("");
  return o[Ya] = s, e && (n(o, e), n(s, e)), s;
}
const Pe = Pd;
function md(e) {
  return bd(e);
}
function bd(e, t) {
  const r = na();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: s,
    createElement: a,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: f,
    nextSibling: p,
    setScopeId: b = Ne,
    insertStaticContent: h
  } = e, _ = (d, m, g, w = null, y = null, k = null, $ = void 0, C = null, S = !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !Bt(d, m) && (w = Nt(d), be(d, y, k, !0), d = null), m.patchFlag === -2 && (S = !1, m.dynamicChildren = null);
    const { type: x, ref: P, shapeFlag: z } = m;
    switch (x) {
      case mn:
        A(d, m, g, w);
        break;
      case ot:
        j(d, m, g, w);
        break;
      case Sn:
        d == null && L(m, g, w, $);
        break;
      case he:
        O(
          d,
          m,
          g,
          w,
          y,
          k,
          $,
          C,
          S
        );
        break;
      default:
        z & 1 ? M(
          d,
          m,
          g,
          w,
          y,
          k,
          $,
          C,
          S
        ) : z & 6 ? J(
          d,
          m,
          g,
          w,
          y,
          k,
          $,
          C,
          S
        ) : (z & 64 || z & 128) && x.process(
          d,
          m,
          g,
          w,
          y,
          k,
          $,
          C,
          S,
          Ct
        );
    }
    P != null && y && Bn(P, d && d.ref, k, m || d, !m);
  }, A = (d, m, g, w) => {
    if (d == null)
      n(
        m.el = i(m.children),
        g,
        w
      );
    else {
      const y = m.el = d.el;
      m.children !== d.children && c(y, m.children);
    }
  }, j = (d, m, g, w) => {
    d == null ? n(
      m.el = l(m.children || ""),
      g,
      w
    ) : m.el = d.el;
  }, L = (d, m, g, w) => {
    [d.el, d.anchor] = h(
      d.children,
      m,
      g,
      w,
      d.el,
      d.anchor
    );
  }, v = ({ el: d, anchor: m }, g, w) => {
    let y;
    for (; d && d !== m; )
      y = p(d), n(d, g, w), d = y;
    n(m, g, w);
  }, T = ({ el: d, anchor: m }) => {
    let g;
    for (; d && d !== m; )
      g = p(d), o(d), d = g;
    o(m);
  }, M = (d, m, g, w, y, k, $, C, S) => {
    m.type === "svg" ? $ = "svg" : m.type === "math" && ($ = "mathml"), d == null ? I(
      m,
      g,
      w,
      y,
      k,
      $,
      C,
      S
    ) : R(
      d,
      m,
      y,
      k,
      $,
      C,
      S
    );
  }, I = (d, m, g, w, y, k, $, C) => {
    let S, x;
    const { props: P, shapeFlag: z, transition: E, dirs: F } = d;
    if (S = d.el = a(
      d.type,
      k,
      P && P.is,
      P
    ), z & 8 ? u(S, d.children) : z & 16 && Y(
      d.children,
      S,
      null,
      w,
      y,
      Cn(d, k),
      $,
      C
    ), F && St(d, null, w, "created"), G(S, d, d.scopeId, $, w), P) {
      for (const ie in P)
        ie !== "value" && !or(ie) && s(S, ie, null, P[ie], k, w);
      "value" in P && s(S, "value", null, P.value, k), (x = P.onVnodeBeforeMount) && qe(x, w, d);
    }
    F && St(d, null, w, "beforeMount");
    const U = gd(y, E);
    U && E.beforeEnter(S), n(S, m, g), ((x = P && P.onVnodeMounted) || U || F) && Pe(() => {
      x && qe(x, w, d), U && E.enter(S), F && St(d, null, w, "mounted");
    }, y);
  }, G = (d, m, g, w, y) => {
    if (g && b(d, g), w)
      for (let k = 0; k < w.length; k++)
        b(d, w[k]);
    if (y) {
      let k = y.subTree;
      if (m === k) {
        const $ = y.vnode;
        G(
          d,
          $,
          $.scopeId,
          $.slotScopeIds,
          y.parent
        );
      }
    }
  }, Y = (d, m, g, w, y, k, $, C, S = 0) => {
    for (let x = S; x < d.length; x++) {
      const P = d[x] = C ? ft(d[x]) : Ze(d[x]);
      _(
        null,
        P,
        m,
        g,
        w,
        y,
        k,
        $,
        C
      );
    }
  }, R = (d, m, g, w, y, k, $) => {
    const C = m.el = d.el;
    let { patchFlag: S, dynamicChildren: x, dirs: P } = m;
    S |= d.patchFlag & 16;
    const z = d.props || ue, E = m.props || ue;
    let F;
    if (g && $t(g, !1), (F = E.onVnodeBeforeUpdate) && qe(F, g, m, d), P && St(m, d, g, "beforeUpdate"), g && $t(g, !0), (z.innerHTML && E.innerHTML == null || z.textContent && E.textContent == null) && u(C, ""), x ? B(
      d.dynamicChildren,
      x,
      C,
      g,
      w,
      Cn(m, y),
      k
    ) : $ || W(
      d,
      m,
      C,
      null,
      g,
      w,
      Cn(m, y),
      k,
      !1
    ), S > 0) {
      if (S & 16)
        H(C, z, E, g, y);
      else if (S & 2 && z.class !== E.class && s(C, "class", null, E.class, y), S & 4 && s(C, "style", z.style, E.style, y), S & 8) {
        const U = m.dynamicProps;
        for (let ie = 0; ie < U.length; ie++) {
          const re = U[ie], Ce = z[re], Fe = E[re];
          (Fe !== Ce || re === "value") && s(C, re, Ce, Fe, y, g);
        }
      }
      S & 1 && d.children !== m.children && u(C, m.children);
    } else !$ && x == null && H(C, z, E, g, y);
    ((F = E.onVnodeUpdated) || P) && Pe(() => {
      F && qe(F, g, m, d), P && St(m, d, g, "updated");
    }, w);
  }, B = (d, m, g, w, y, k, $) => {
    for (let C = 0; C < m.length; C++) {
      const S = d[C], x = m[C], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(S, x) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 70) ? f(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      _(
        S,
        x,
        P,
        null,
        w,
        y,
        k,
        $,
        !0
      );
    }
  }, H = (d, m, g, w, y) => {
    if (m !== g) {
      if (m !== ue)
        for (const k in m)
          !or(k) && !(k in g) && s(
            d,
            k,
            m[k],
            null,
            y,
            w
          );
      for (const k in g) {
        if (or(k)) continue;
        const $ = g[k], C = m[k];
        $ !== C && k !== "value" && s(d, k, C, $, y, w);
      }
      "value" in g && s(d, "value", m.value, g.value, y);
    }
  }, O = (d, m, g, w, y, k, $, C, S) => {
    const x = m.el = d ? d.el : i(""), P = m.anchor = d ? d.anchor : i("");
    let { patchFlag: z, dynamicChildren: E, slotScopeIds: F } = m;
    F && (C = C ? C.concat(F) : F), d == null ? (n(x, g, w), n(P, g, w), Y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      g,
      P,
      y,
      k,
      $,
      C,
      S
    )) : z > 0 && z & 64 && E && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (B(
      d.dynamicChildren,
      E,
      g,
      y,
      k,
      $,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || y && m === y.subTree) && wo(
      d,
      m,
      !0
      /* shallow */
    )) : W(
      d,
      m,
      g,
      P,
      y,
      k,
      $,
      C,
      S
    );
  }, J = (d, m, g, w, y, k, $, C, S) => {
    m.slotScopeIds = C, d == null ? m.shapeFlag & 512 ? y.ctx.activate(
      m,
      g,
      w,
      $,
      S
    ) : se(
      m,
      g,
      w,
      y,
      k,
      $,
      S
    ) : _e(d, m, S);
  }, se = (d, m, g, w, y, k, $) => {
    const C = d.component = zd(
      d,
      w,
      y
    );
    if (Ia(d) && (C.ctx.renderer = Ct), Rd(C, !1, $), C.asyncDep) {
      if (y && y.registerDep(C, ae, $), !d.el) {
        const S = C.subTree = ke(ot);
        j(null, S, m, g);
      }
    } else
      ae(
        C,
        d,
        m,
        g,
        y,
        k,
        $
      );
  }, _e = (d, m, g) => {
    const w = m.component = d.component;
    if (Sd(d, m, g))
      if (w.asyncDep && !w.asyncResolved) {
        Q(w, m, g);
        return;
      } else
        w.next = m, Au(w.update), w.effect.dirty = !0, w.update();
    else
      m.el = d.el, w.vnode = m;
  }, ae = (d, m, g, w, y, k, $) => {
    const C = () => {
      if (d.isMounted) {
        let { next: P, bu: z, u: E, parent: F, vnode: U } = d;
        {
          const Mt = Xa(d);
          if (Mt) {
            P && (P.el = U.el, Q(d, P, $)), Mt.asyncDep.then(() => {
              d.isUnmounted || C();
            });
            return;
          }
        }
        let ie = P, re;
        $t(d, !1), P ? (P.el = U.el, Q(d, P, $)) : P = U, z && wn(z), (re = P.props && P.props.onVnodeBeforeUpdate) && qe(re, F, P, U), $t(d, !0);
        const Ce = ss(d), Fe = d.subTree;
        d.subTree = Ce, _(
          Fe,
          Ce,
          // parent may have changed if it's in a teleport
          f(Fe.el),
          // anchor may have changed if it's in a fragment
          Nt(Fe),
          d,
          y,
          k
        ), P.el = Ce.el, ie === null && $d(d, Ce.el), E && Pe(E, y), (re = P.props && P.props.onVnodeUpdated) && Pe(
          () => qe(re, F, P, U),
          y
        );
      } else {
        let P;
        const { el: z, props: E } = m, { bm: F, m: U, parent: ie } = d, re = ar(m);
        $t(d, !1), F && wn(F), !re && (P = E && E.onVnodeBeforeMount) && qe(P, ie, m), $t(d, !0);
        {
          const Ce = d.subTree = ss(d);
          _(
            null,
            Ce,
            g,
            w,
            d,
            y,
            k
          ), m.el = Ce.el;
        }
        if (U && Pe(U, y), !re && (P = E && E.onVnodeMounted)) {
          const Ce = m;
          Pe(
            () => qe(P, ie, Ce),
            y
          );
        }
        (m.shapeFlag & 256 || ie && ar(ie.vnode) && ie.vnode.shapeFlag & 256) && d.a && Pe(d.a, y), d.isMounted = !0, m = g = w = null;
      }
    }, S = d.effect = new ao(
      C,
      Ne,
      () => go(x),
      d.scope
      // track it in component's effect scope
    ), x = d.update = () => {
      S.dirty && S.run();
    };
    x.i = d, x.id = d.uid, $t(d, !0), x();
  }, Q = (d, m, g) => {
    m.component = d;
    const w = d.vnode.props;
    d.vnode = m, d.next = null, sd(d, m.props, w, g), cd(d, m.children, g), wt(), qo(d), kt();
  }, W = (d, m, g, w, y, k, $, C, S = !1) => {
    const x = d && d.children, P = d ? d.shapeFlag : 0, z = m.children, { patchFlag: E, shapeFlag: F } = m;
    if (E > 0) {
      if (E & 128) {
        Te(
          x,
          z,
          g,
          w,
          y,
          k,
          $,
          C,
          S
        );
        return;
      } else if (E & 256) {
        $e(
          x,
          z,
          g,
          w,
          y,
          k,
          $,
          C,
          S
        );
        return;
      }
    }
    F & 8 ? (P & 16 && it(x, y, k), z !== x && u(g, z)) : P & 16 ? F & 16 ? Te(
      x,
      z,
      g,
      w,
      y,
      k,
      $,
      C,
      S
    ) : it(x, y, k, !0) : (P & 8 && u(g, ""), F & 16 && Y(
      z,
      g,
      w,
      y,
      k,
      $,
      C,
      S
    ));
  }, $e = (d, m, g, w, y, k, $, C, S) => {
    d = d || Ut, m = m || Ut;
    const x = d.length, P = m.length, z = Math.min(x, P);
    let E;
    for (E = 0; E < z; E++) {
      const F = m[E] = S ? ft(m[E]) : Ze(m[E]);
      _(
        d[E],
        F,
        g,
        null,
        y,
        k,
        $,
        C,
        S
      );
    }
    x > P ? it(
      d,
      y,
      k,
      !0,
      !1,
      z
    ) : Y(
      m,
      g,
      w,
      y,
      k,
      $,
      C,
      S,
      z
    );
  }, Te = (d, m, g, w, y, k, $, C, S) => {
    let x = 0;
    const P = m.length;
    let z = d.length - 1, E = P - 1;
    for (; x <= z && x <= E; ) {
      const F = d[x], U = m[x] = S ? ft(m[x]) : Ze(m[x]);
      if (Bt(F, U))
        _(
          F,
          U,
          g,
          null,
          y,
          k,
          $,
          C,
          S
        );
      else
        break;
      x++;
    }
    for (; x <= z && x <= E; ) {
      const F = d[z], U = m[E] = S ? ft(m[E]) : Ze(m[E]);
      if (Bt(F, U))
        _(
          F,
          U,
          g,
          null,
          y,
          k,
          $,
          C,
          S
        );
      else
        break;
      z--, E--;
    }
    if (x > z) {
      if (x <= E) {
        const F = E + 1, U = F < P ? m[F].el : w;
        for (; x <= E; )
          _(
            null,
            m[x] = S ? ft(m[x]) : Ze(m[x]),
            g,
            U,
            y,
            k,
            $,
            C,
            S
          ), x++;
      }
    } else if (x > E)
      for (; x <= z; )
        be(d[x], y, k, !0), x++;
    else {
      const F = x, U = x, ie = /* @__PURE__ */ new Map();
      for (x = U; x <= E; x++) {
        const Le = m[x] = S ? ft(m[x]) : Ze(m[x]);
        Le.key != null && ie.set(Le.key, x);
      }
      let re, Ce = 0;
      const Fe = E - U + 1;
      let Mt = !1, Co = 0;
      const Qt = new Array(Fe);
      for (x = 0; x < Fe; x++) Qt[x] = 0;
      for (x = F; x <= z; x++) {
        const Le = d[x];
        if (Ce >= Fe) {
          be(Le, y, k, !0);
          continue;
        }
        let We;
        if (Le.key != null)
          We = ie.get(Le.key);
        else
          for (re = U; re <= E; re++)
            if (Qt[re - U] === 0 && Bt(Le, m[re])) {
              We = re;
              break;
            }
        We === void 0 ? be(Le, y, k, !0) : (Qt[We - U] = x + 1, We >= Co ? Co = We : Mt = !0, _(
          Le,
          m[We],
          g,
          null,
          y,
          k,
          $,
          C,
          S
        ), Ce++);
      }
      const So = Mt ? hd(Qt) : Ut;
      for (re = So.length - 1, x = Fe - 1; x >= 0; x--) {
        const Le = U + x, We = m[Le], $o = Le + 1 < P ? m[Le + 1].el : w;
        Qt[x] === 0 ? _(
          null,
          We,
          g,
          $o,
          y,
          k,
          $,
          C,
          S
        ) : Mt && (re < 0 || x !== So[re] ? me(We, g, $o, 2) : re--);
      }
    }
  }, me = (d, m, g, w, y = null) => {
    const { el: k, type: $, transition: C, children: S, shapeFlag: x } = d;
    if (x & 6) {
      me(d.component.subTree, m, g, w);
      return;
    }
    if (x & 128) {
      d.suspense.move(m, g, w);
      return;
    }
    if (x & 64) {
      $.move(d, m, g, Ct);
      return;
    }
    if ($ === he) {
      n(k, m, g);
      for (let z = 0; z < S.length; z++)
        me(S[z], m, g, w);
      n(d.anchor, m, g);
      return;
    }
    if ($ === Sn) {
      v(d, m, g);
      return;
    }
    if (w !== 2 && x & 1 && C)
      if (w === 0)
        C.beforeEnter(k), n(k, m, g), Pe(() => C.enter(k), y);
      else {
        const { leave: z, delayLeave: E, afterLeave: F } = C, U = () => n(k, m, g), ie = () => {
          z(k, () => {
            U(), F && F();
          });
        };
        E ? E(k, U, ie) : ie();
      }
    else
      n(k, m, g);
  }, be = (d, m, g, w = !1, y = !1) => {
    const {
      type: k,
      props: $,
      ref: C,
      children: S,
      dynamicChildren: x,
      shapeFlag: P,
      patchFlag: z,
      dirs: E,
      cacheIndex: F
    } = d;
    if (z === -2 && (y = !1), C != null && Bn(C, null, g, d, !0), F != null && (m.renderCache[F] = void 0), P & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const U = P & 1 && E, ie = !ar(d);
    let re;
    if (ie && (re = $ && $.onVnodeBeforeUnmount) && qe(re, m, d), P & 6)
      Pr(d.component, g, w);
    else {
      if (P & 128) {
        d.suspense.unmount(g, w);
        return;
      }
      U && St(d, null, m, "beforeUnmount"), P & 64 ? d.type.remove(
        d,
        m,
        g,
        Ct,
        w
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== he || z > 0 && z & 64) ? it(
        x,
        m,
        g,
        !1,
        !0
      ) : (k === he && z & 384 || !y && P & 16) && it(S, m, g), w && _t(d);
    }
    (ie && (re = $ && $.onVnodeUnmounted) || U) && Pe(() => {
      re && qe(re, m, d), U && St(d, null, m, "unmounted");
    }, g);
  }, _t = (d) => {
    const { type: m, el: g, anchor: w, transition: y } = d;
    if (m === he) {
      at(g, w);
      return;
    }
    if (m === Sn) {
      T(d);
      return;
    }
    const k = () => {
      o(g), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (d.shapeFlag & 1 && y && !y.persisted) {
      const { leave: $, delayLeave: C } = y, S = () => $(g, k);
      C ? C(d.el, k, S) : S();
    } else
      k();
  }, at = (d, m) => {
    let g;
    for (; d !== m; )
      g = p(d), o(d), d = g;
    o(m);
  }, Pr = (d, m, g) => {
    const { bum: w, scope: y, update: k, subTree: $, um: C, m: S, a: x } = d;
    os(S), os(x), w && wn(w), y.stop(), k && (k.active = !1, be($, d, m, g)), C && Pe(C, m), Pe(() => {
      d.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
  }, it = (d, m, g, w = !1, y = !1, k = 0) => {
    for (let $ = k; $ < d.length; $++)
      be(d[$], m, g, w, y);
  }, Nt = (d) => {
    if (d.shapeFlag & 6)
      return Nt(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const m = p(d.anchor || d.el), g = m && m[Ya];
    return g ? p(g) : m;
  };
  let Jt = !1;
  const Or = (d, m, g) => {
    d == null ? m._vnode && be(m._vnode, null, null, !0) : _(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      g
    ), m._vnode = d, Jt || (Jt = !0, qo(), Sa(), Jt = !1);
  }, Ct = {
    p: _,
    um: be,
    m: me,
    r: _t,
    mt: se,
    mc: Y,
    pc: W,
    pbc: B,
    n: Nt,
    o: e
  };
  return {
    render: Or,
    hydrate: void 0,
    createApp: rd(Or)
  };
}
function Cn({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function $t({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function gd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wo(e, t, r = !1) {
  const n = e.children, o = t.children;
  if (N(n) && N(o))
    for (let s = 0; s < n.length; s++) {
      const a = n[s];
      let i = o[s];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[s] = ft(o[s]), i.el = a.el), !r && i.patchFlag !== -2 && wo(a, i)), i.type === mn && (i.el = a.el);
    }
}
function hd(e) {
  const t = e.slice(), r = [0];
  let n, o, s, a, i;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (o = r[r.length - 1], e[o] < c) {
        t[n] = o, r.push(n);
        continue;
      }
      for (s = 0, a = r.length - 1; s < a; )
        i = s + a >> 1, e[r[i]] < c ? s = i + 1 : a = i;
      c < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), r[s] = n);
    }
  }
  for (s = r.length, a = r[s - 1]; s-- > 0; )
    r[s] = a, a = t[a];
  return r;
}
function Xa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xa(t);
}
function os(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const vd = Symbol.for("v-scx"), yd = () => qt(vd), Fr = {};
function gt(e, t, r) {
  return ei(e, t, r);
}
function ei(e, t, {
  immediate: r,
  deep: n,
  flush: o,
  once: s,
  onTrack: a,
  onTrigger: i
} = ue) {
  if (t && s) {
    const I = t;
    t = (...G) => {
      I(...G), M();
    };
  }
  const l = ve, c = (I) => n === !0 ? I : (
    // for deep: false, only traverse root-level properties
    pt(I, n === !1 ? 1 : void 0)
  );
  let u, f = !1, p = !1;
  if (Ae(e) ? (u = () => e.value, f = Zt(e)) : sr(e) ? (u = () => c(e), f = !0) : N(e) ? (p = !0, f = e.some((I) => sr(I) || Zt(I)), u = () => e.map((I) => {
    if (Ae(I))
      return I.value;
    if (sr(I))
      return c(I);
    if (V(I))
      return vt(I, l, 2);
  })) : V(e) ? t ? u = () => vt(e, l, 2) : u = () => (b && b(), Me(
    e,
    l,
    3,
    [h]
  )) : u = Ne, t && n) {
    const I = u;
    u = () => pt(I());
  }
  let b, h = (I) => {
    b = v.onStop = () => {
      vt(I, l, 4), b = v.onStop = void 0;
    };
  }, _;
  if (bn)
    if (h = Ne, t ? r && Me(t, l, 3, [
      u(),
      p ? [] : void 0,
      h
    ]) : u(), o === "sync") {
      const I = yd();
      _ = I.__watcherHandles || (I.__watcherHandles = []);
    } else
      return Ne;
  let A = p ? new Array(e.length).fill(Fr) : Fr;
  const j = () => {
    if (!(!v.active || !v.dirty))
      if (t) {
        const I = v.run();
        (n || f || (p ? I.some((G, Y) => yt(G, A[Y])) : yt(I, A))) && (b && b(), Me(t, l, 3, [
          I,
          // pass undefined as the old value when it's changed for the first time
          A === Fr ? void 0 : p && A[0] === Fr ? [] : A,
          h
        ]), A = I);
      } else
        v.run();
  };
  j.allowRecurse = !!t;
  let L;
  o === "sync" ? L = j : o === "post" ? L = () => Pe(j, l && l.suspense) : (j.pre = !0, l && (j.id = l.uid), L = () => go(j));
  const v = new ao(u, Ne, L), T = nu(), M = () => {
    v.stop(), T && oo(T.effects, v);
  };
  return t ? r ? j() : A = v.run() : o === "post" ? Pe(
    v.run.bind(v),
    l && l.suspense
  ) : v.run(), _ && _.push(M), M;
}
function xd(e, t, r) {
  const n = this.proxy, o = fe(e) ? e.includes(".") ? ti(n, e) : () => n[e] : e.bind(n, n);
  let s;
  V(t) ? s = t : (s = t.handler, r = t);
  const a = Sr(this), i = ei(o, s.bind(n), r);
  return a(), i;
}
function ti(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++)
      n = n[r[o]];
    return n;
  };
}
function pt(e, t = 1 / 0, r) {
  if (t <= 0 || !de(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, Ae(e))
    pt(e.value, t, r);
  else if (N(e))
    for (let n = 0; n < e.length; n++)
      pt(e[n], t, r);
  else if (Qs(e) || Kt(e))
    e.forEach((n) => {
      pt(n, t, r);
    });
  else if (ta(e)) {
    for (const n in e)
      pt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && pt(e[n], t, r);
  }
  return e;
}
const wd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ge(t)}Modifiers`] || e[`${Rt(t)}Modifiers`];
function kd(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ue;
  let o = r;
  const s = t.startsWith("update:"), a = s && wd(n, t.slice(7));
  a && (a.trim && (o = r.map((u) => fe(u) ? u.trim() : u)), a.number && (o = r.map(Gc)));
  let i, l = n[i = xn(t)] || // also try camelCase event handler (#2249)
  n[i = xn(Ge(t))];
  !l && s && (l = n[i = xn(Rt(t))]), l && Me(
    l,
    e,
    6,
    o
  );
  const c = n[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Me(
      c,
      e,
      6,
      o
    );
  }
}
function ri(e, t, r = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let a = {}, i = !1;
  if (!V(e)) {
    const l = (c) => {
      const u = ri(c, t, !0);
      u && (i = !0, ye(a, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !i ? (de(e) && n.set(e, null), null) : (N(s) ? s.forEach((l) => a[l] = null) : ye(a, s), de(e) && n.set(e, a), a);
}
function pn(e, t) {
  return !e || !nn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, Rt(t)) || Z(e, t));
}
function ss(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: o,
    propsOptions: [s],
    slots: a,
    attrs: i,
    emit: l,
    render: c,
    renderCache: u,
    props: f,
    data: p,
    setupState: b,
    ctx: h,
    inheritAttrs: _
  } = e, A = Zr(e);
  let j, L;
  try {
    if (r.shapeFlag & 4) {
      const T = o || n, M = T;
      j = Ze(
        c.call(
          M,
          T,
          u,
          f,
          b,
          p,
          h
        )
      ), L = i;
    } else {
      const T = t;
      j = Ze(
        T.length > 1 ? T(
          f,
          { attrs: i, slots: a, emit: l }
        ) : T(
          f,
          null
        )
      ), L = t.props ? i : _d(i);
    }
  } catch (T) {
    cr.length = 0, dn(T, e, 1), j = ke(ot);
  }
  let v = j;
  if (L && _ !== !1) {
    const T = Object.keys(L), { shapeFlag: M } = v;
    T.length && M & 7 && (s && T.some(no) && (L = Cd(
      L,
      s
    )), v = Et(v, L, !1, !0));
  }
  return r.dirs && (v = Et(v, null, !1, !0), v.dirs = v.dirs ? v.dirs.concat(r.dirs) : r.dirs), r.transition && (v.transition = r.transition), j = v, Zr(A), j;
}
const _d = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || nn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Cd = (e, t) => {
  const r = {};
  for (const n in e)
    (!no(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Sd(e, t, r) {
  const { props: n, children: o, component: s } = e, { props: a, children: i, patchFlag: l } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? as(n, a, c) : !!a;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        if (a[p] !== n[p] && !pn(c, p))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : n === a ? !1 : n ? a ? as(n, a, c) : !0 : !!a;
  return !1;
}
function as(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const s = n[o];
    if (t[s] !== e[s] && !pn(r, s))
      return !0;
  }
  return !1;
}
function $d({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const Td = (e) => e.__isSuspense;
function Pd(e, t) {
  t && t.pendingBranch ? N(e) ? t.effects.push(...e) : t.effects.push(e) : Lu(e);
}
const he = Symbol.for("v-fgt"), mn = Symbol.for("v-txt"), ot = Symbol.for("v-cmt"), Sn = Symbol.for("v-stc"), cr = [];
let je = null;
function X(e = !1) {
  cr.push(je = e ? null : []);
}
function Od() {
  cr.pop(), je = cr[cr.length - 1] || null;
}
let pr = 1;
function is(e) {
  pr += e, e < 0 && je && (je.hasOnce = !0);
}
function ni(e) {
  return e.dynamicChildren = pr > 0 ? je || Ut : null, Od(), pr > 0 && je && je.push(e), e;
}
function pe(e, t, r, n, o, s) {
  return ni(
    oe(
      e,
      t,
      r,
      n,
      o,
      s,
      !0
    )
  );
}
function Je(e, t, r, n, o) {
  return ni(
    ke(
      e,
      t,
      r,
      n,
      o,
      !0
    )
  );
}
function oi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const si = ({ key: e }) => e ?? null, Ur = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? fe(e) || Ae(e) || V(e) ? { i: ge, r: e, k: t, f: !!r } : e : null);
function oe(e, t = null, r = null, n = 0, o = null, s = e === he ? 0 : 1, a = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && si(t),
    ref: t && Ur(t),
    scopeId: Ta,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return i ? (ko(l, r), s & 128 && e.normalize(l)) : r && (l.shapeFlag |= fe(r) ? 8 : 16), pr > 0 && // avoid a block node from tracking itself
  !a && // has current parent block
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && je.push(l), l;
}
const ke = Id;
function Id(e, t = null, r = null, n = 0, o = null, s = !1) {
  if ((!e || e === za) && (e = ot), oi(e)) {
    const i = Et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && ko(i, r), pr > 0 && !s && je && (i.shapeFlag & 6 ? je[je.indexOf(e)] = i : je.push(i)), i.patchFlag = -2, i;
  }
  if (Bd(e) && (e = e.__vccOpts), t) {
    t = Ad(t);
    let { class: i, style: l } = t;
    i && !fe(i) && (t.class = Cr(i)), de(l) && (va(l) && !N(l) && (l = ye({}, l)), t.style = ln(l));
  }
  const a = fe(e) ? 1 : Td(e) ? 128 : ud(e) ? 64 : de(e) ? 4 : V(e) ? 2 : 0;
  return oe(
    e,
    t,
    r,
    n,
    o,
    a,
    s,
    !0
  );
}
function Ad(e) {
  return e ? va(e) || Ha(e) ? ye({}, e) : e : null;
}
function Et(e, t, r = !1, n = !1) {
  const { props: o, ref: s, patchFlag: a, children: i, transition: l } = e, c = t ? te(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && si(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && s ? N(s) ? s.concat(Ur(t)) : [s, Ur(t)] : Ur(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Et(e.ssContent),
    ssFallback: e.ssFallback && Et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Jr(
    u,
    l.clone(u)
  ), u;
}
function Ld(e = " ", t = 0) {
  return ke(mn, null, e, t);
}
function It(e = "", t = !1) {
  return t ? (X(), Je(ot, null, e)) : ke(ot, null, e);
}
function Ze(e) {
  return e == null || typeof e == "boolean" ? ke(ot) : N(e) ? ke(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ft(e) : ke(mn, null, String(e));
}
function ft(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
}
function ko(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (N(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ko(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !Ha(t) ? t._ctx = ge : o === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else V(t) ? (t = { default: t, _ctx: ge }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Ld(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function te(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = Cr([t.class, n.class]));
      else if (o === "style")
        t.style = ln([t.style, n.style]);
      else if (nn(o)) {
        const s = t[o], a = n[o];
        a && s !== a && !(N(s) && s.includes(a)) && (t[o] = s ? [].concat(s, a) : a);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function qe(e, t, r, n = null) {
  Me(e, t, 7, [
    r,
    n
  ]);
}
const jd = Va();
let Ed = 0;
function zd(e, t, r) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || jd, s = {
    uid: Ed++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new tu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ka(n, o),
    emitsOptions: ri(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ue,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ue,
    data: ue,
    props: ue,
    attrs: ue,
    slots: ue,
    refs: ue,
    setupState: ue,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = kd.bind(null, s), e.ce && e.ce(s), s;
}
let ve = null;
const ai = () => ve || ge;
let Xr, Hn;
{
  const e = na(), t = (r, n) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(n), (s) => {
      o.length > 1 ? o.forEach((a) => a(s)) : o[0](s);
    };
  };
  Xr = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ve = r
  ), Hn = t(
    "__VUE_SSR_SETTERS__",
    (r) => bn = r
  );
}
const Sr = (e) => {
  const t = ve;
  return Xr(e), e.scope.on(), () => {
    e.scope.off(), Xr(t);
  };
}, ls = () => {
  ve && ve.scope.off(), Xr(null);
};
function ii(e) {
  return e.vnode.shapeFlag & 4;
}
let bn = !1;
function Rd(e, t = !1, r = !1) {
  t && Hn(t);
  const { props: n, children: o } = e.vnode, s = ii(e);
  od(e, n, s, t), ld(e, o, r);
  const a = s ? Nd(e, t) : void 0;
  return t && Hn(!1), a;
}
function Nd(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Zu);
  const { setup: n } = r;
  if (n) {
    const o = e.setupContext = n.length > 1 ? Fd(e) : null, s = Sr(e);
    wt();
    const a = vt(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    );
    if (kt(), s(), Xs(a)) {
      if (a.then(ls, ls), t)
        return a.then((i) => {
          cs(e, i);
        }).catch((i) => {
          dn(i, e, 0);
        });
      e.asyncDep = a;
    } else
      cs(e, a);
  } else
    li(e);
}
function cs(e, t, r) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = wa(t)), li(e);
}
function li(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Ne);
  {
    const o = Sr(e);
    wt();
    try {
      Yu(e);
    } finally {
      kt(), o();
    }
  }
}
const Md = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  }
};
function Fd(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Md),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wa(Cu(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ir)
        return ir[r](e);
    },
    has(t, r) {
      return r in t || r in ir;
    }
  })) : e.proxy;
}
function Vd(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Bd(e) {
  return V(e) && "__vccOpts" in e;
}
const Dd = (e, t) => Su(e, t, bn), Hd = "3.4.37";
/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ud = "http://www.w3.org/2000/svg", Kd = "http://www.w3.org/1998/Math/MathML", tt = typeof document < "u" ? document : null, us = tt && /* @__PURE__ */ tt.createElement("template"), Gd = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const o = t === "svg" ? tt.createElementNS(Ud, e) : t === "mathml" ? tt.createElementNS(Kd, e) : r ? tt.createElement(e, { is: r }) : tt.createElement(e);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, o, s) {
    const a = r ? r.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), r), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      us.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const i = us.content;
      if (n === "svg" || n === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, r);
    }
    return [
      // first
      a ? a.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, ct = "transition", Xt = "animation", Yt = Symbol("_vtc"), ci = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Wd = /* @__PURE__ */ ye(
  {},
  Ru,
  ci
), Tt = (e, t = []) => {
  N(e) ? e.forEach((r) => r(...t)) : e && e(...t);
}, ds = (e) => e ? N(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function qd(e) {
  const t = {};
  for (const O in e)
    O in ci || (t[O] = e[O]);
  if (e.css === !1)
    return t;
  const {
    name: r = "v",
    type: n,
    duration: o,
    enterFromClass: s = `${r}-enter-from`,
    enterActiveClass: a = `${r}-enter-active`,
    enterToClass: i = `${r}-enter-to`,
    appearFromClass: l = s,
    appearActiveClass: c = a,
    appearToClass: u = i,
    leaveFromClass: f = `${r}-leave-from`,
    leaveActiveClass: p = `${r}-leave-active`,
    leaveToClass: b = `${r}-leave-to`
  } = e, h = Zd(o), _ = h && h[0], A = h && h[1], {
    onBeforeEnter: j,
    onEnter: L,
    onEnterCancelled: v,
    onLeave: T,
    onLeaveCancelled: M,
    onBeforeAppear: I = j,
    onAppear: G = L,
    onAppearCancelled: Y = v
  } = t, R = (O, J, se) => {
    ut(O, J ? u : i), ut(O, J ? c : a), se && se();
  }, B = (O, J) => {
    O._isLeaving = !1, ut(O, f), ut(O, b), ut(O, p), J && J();
  }, H = (O) => (J, se) => {
    const _e = O ? G : L, ae = () => R(J, O, se);
    Tt(_e, [J, ae]), fs(() => {
      ut(J, O ? l : s), et(J, O ? u : i), ds(_e) || ps(J, n, _, ae);
    });
  };
  return ye(t, {
    onBeforeEnter(O) {
      Tt(j, [O]), et(O, s), et(O, a);
    },
    onBeforeAppear(O) {
      Tt(I, [O]), et(O, l), et(O, c);
    },
    onEnter: H(!1),
    onAppear: H(!0),
    onLeave(O, J) {
      O._isLeaving = !0;
      const se = () => B(O, J);
      et(O, f), et(O, p), di(), fs(() => {
        O._isLeaving && (ut(O, f), et(O, b), ds(T) || ps(O, n, A, se));
      }), Tt(T, [O, se]);
    },
    onEnterCancelled(O) {
      R(O, !1), Tt(v, [O]);
    },
    onAppearCancelled(O) {
      R(O, !0), Tt(Y, [O]);
    },
    onLeaveCancelled(O) {
      B(O), Tt(M, [O]);
    }
  });
}
function Zd(e) {
  if (e == null)
    return null;
  if (de(e))
    return [$n(e.enter), $n(e.leave)];
  {
    const t = $n(e);
    return [t, t];
  }
}
function $n(e) {
  return Wc(e);
}
function et(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e[Yt] || (e[Yt] = /* @__PURE__ */ new Set())).add(t);
}
function ut(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const r = e[Yt];
  r && (r.delete(t), r.size || (e[Yt] = void 0));
}
function fs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Yd = 0;
function ps(e, t, r, n) {
  const o = e._endId = ++Yd, s = () => {
    o === e._endId && n();
  };
  if (r)
    return setTimeout(s, r);
  const { type: a, timeout: i, propCount: l } = ui(e, t);
  if (!a)
    return n();
  const c = a + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(c, p), s();
  }, p = (b) => {
    b.target === e && ++u >= l && f();
  };
  setTimeout(() => {
    u < l && f();
  }, i + 1), e.addEventListener(c, p);
}
function ui(e, t) {
  const r = window.getComputedStyle(e), n = (h) => (r[h] || "").split(", "), o = n(`${ct}Delay`), s = n(`${ct}Duration`), a = ms(o, s), i = n(`${Xt}Delay`), l = n(`${Xt}Duration`), c = ms(i, l);
  let u = null, f = 0, p = 0;
  t === ct ? a > 0 && (u = ct, f = a, p = s.length) : t === Xt ? c > 0 && (u = Xt, f = c, p = l.length) : (f = Math.max(a, c), u = f > 0 ? a > c ? ct : Xt : null, p = u ? u === ct ? s.length : l.length : 0);
  const b = u === ct && /\b(transform|all)(,|$)/.test(
    n(`${ct}Property`).toString()
  );
  return {
    type: u,
    timeout: f,
    propCount: p,
    hasTransform: b
  };
}
function ms(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((r, n) => bs(r) + bs(e[n])));
}
function bs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function di() {
  return document.body.offsetHeight;
}
function Jd(e, t, r) {
  const n = e[Yt];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const gs = Symbol("_vod"), Qd = Symbol("_vsh"), Xd = Symbol(""), ef = /(^|;)\s*display\s*:/;
function tf(e, t, r) {
  const n = e.style, o = fe(r);
  let s = !1;
  if (r && !o) {
    if (t)
      if (fe(t))
        for (const a of t.split(";")) {
          const i = a.slice(0, a.indexOf(":")).trim();
          r[i] == null && Kr(n, i, "");
        }
      else
        for (const a in t)
          r[a] == null && Kr(n, a, "");
    for (const a in r)
      a === "display" && (s = !0), Kr(n, a, r[a]);
  } else if (o) {
    if (t !== r) {
      const a = n[Xd];
      a && (r += ";" + a), n.cssText = r, s = ef.test(r);
    }
  } else t && e.removeAttribute("style");
  gs in e && (e[gs] = s ? n.display : "", e[Qd] && (n.display = "none"));
}
const hs = /\s*!important$/;
function Kr(e, t, r) {
  if (N(r))
    r.forEach((n) => Kr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = rf(e, t);
    hs.test(r) ? e.setProperty(
      Rt(n),
      r.replace(hs, ""),
      "important"
    ) : e[n] = r;
  }
}
const vs = ["Webkit", "Moz", "ms"], Tn = {};
function rf(e, t) {
  const r = Tn[t];
  if (r)
    return r;
  let n = Ge(t);
  if (n !== "filter" && n in e)
    return Tn[t] = n;
  n = an(n);
  for (let o = 0; o < vs.length; o++) {
    const s = vs[o] + n;
    if (s in e)
      return Tn[t] = s;
  }
  return t;
}
const ys = "http://www.w3.org/1999/xlink";
function xs(e, t, r, n, o, s = eu(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(ys, t.slice(6, t.length)) : e.setAttributeNS(ys, t, r) : r == null || s && !oa(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : xt(r) ? String(r) : r
  );
}
function nf(e, t, r, n) {
  if (t === "innerHTML" || t === "textContent") {
    if (r == null) return;
    e[t] = r;
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, i = r == null ? "" : String(r);
    (a !== i || !("_value" in e)) && (e.value = i), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = oa(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(t);
}
function of(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function sf(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const ws = Symbol("_vei");
function af(e, t, r, n, o = null) {
  const s = e[ws] || (e[ws] = {}), a = s[t];
  if (n && a)
    a.value = n;
  else {
    const [i, l] = lf(t);
    if (n) {
      const c = s[t] = df(
        n,
        o
      );
      of(e, i, c, l);
    } else a && (sf(e, i, a, l), s[t] = void 0);
  }
}
const ks = /(?:Once|Passive|Capture)$/;
function lf(e) {
  let t;
  if (ks.test(e)) {
    t = {};
    let n;
    for (; n = e.match(ks); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rt(e.slice(2)), t];
}
let Pn = 0;
const cf = /* @__PURE__ */ Promise.resolve(), uf = () => Pn || (cf.then(() => Pn = 0), Pn = Date.now());
function df(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Me(
      ff(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = uf(), r;
}
function ff(e, t) {
  if (N(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (o) => !o._stopped && n && n(o)
    );
  } else
    return t;
}
const _s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pf = (e, t, r, n, o, s) => {
  const a = o === "svg";
  t === "class" ? Jd(e, n, a) : t === "style" ? tf(e, r, n) : nn(t) ? no(t) || af(e, t, r, n, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mf(e, t, n, a)) ? (nf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xs(e, t, n, a, s, t !== "value")) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), xs(e, t, n, a));
};
function mf(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _s(t) && V(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return _s(t) && fe(r) ? !1 : t in e;
}
const fi = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), en = Symbol("_moveCb"), Cs = Symbol("_enterCb"), mi = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ ye({}, Wd, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const r = ai(), n = zu();
    let o, s;
    return La(() => {
      if (!o.length)
        return;
      const a = e.moveClass || `${e.name || "v"}-move`;
      if (!xf(
        o[0].el,
        r.vnode.el,
        a
      ))
        return;
      o.forEach(hf), o.forEach(vf);
      const i = o.filter(yf);
      di(), i.forEach((l) => {
        const c = l.el, u = c.style;
        et(c, a), u.transform = u.webkitTransform = u.transitionDuration = "";
        const f = c[en] = (p) => {
          p && p.target !== c || (!p || /transform$/.test(p.propertyName)) && (c.removeEventListener("transitionend", f), c[en] = null, ut(c, a));
        };
        c.addEventListener("transitionend", f);
      });
    }), () => {
      const a = ee(e), i = qd(a);
      let l = a.tag || he;
      if (o = [], s)
        for (let c = 0; c < s.length; c++) {
          const u = s[c];
          u.el && u.el instanceof Element && (o.push(u), Jr(
            u,
            Rn(
              u,
              i,
              n,
              r
            )
          ), fi.set(
            u,
            u.el.getBoundingClientRect()
          ));
        }
      s = t.default ? Pa(t.default()) : [];
      for (let c = 0; c < s.length; c++) {
        const u = s[c];
        u.key != null && Jr(
          u,
          Rn(u, i, n, r)
        );
      }
      return ke(l, null, s);
    };
  }
}, bf = (e) => delete e.mode;
mi.props;
const gf = mi;
function hf(e) {
  const t = e.el;
  t[en] && t[en](), t[Cs] && t[Cs]();
}
function vf(e) {
  pi.set(e, e.el.getBoundingClientRect());
}
function yf(e) {
  const t = fi.get(e), r = pi.get(e), n = t.left - r.left, o = t.top - r.top;
  if (n || o) {
    const s = e.el.style;
    return s.transform = s.webkitTransform = `translate(${n}px,${o}px)`, s.transitionDuration = "0s", e;
  }
}
function xf(e, t, r) {
  const n = e.cloneNode(), o = e[Yt];
  o && o.forEach((i) => {
    i.split(/\s+/).forEach((l) => l && n.classList.remove(l));
  }), r.split(/\s+/).forEach((i) => i && n.classList.add(i)), n.style.display = "none";
  const s = t.nodeType === 1 ? t : t.parentNode;
  s.appendChild(n);
  const { hasTransform: a } = ui(n);
  return s.removeChild(n), a;
}
const wf = ["ctrl", "shift", "alt", "meta"], kf = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => wf.some((r) => e[`${r}Key`] && !t.includes(r))
}, _f = (e, t) => {
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = (o, ...s) => {
    for (let a = 0; a < t.length; a++) {
      const i = kf[t[a]];
      if (i && i(o, t)) return;
    }
    return e(o, ...s);
  });
}, Cf = /* @__PURE__ */ ye({ patchProp: pf }, Gd);
let Ss;
function Sf() {
  return Ss || (Ss = md(Cf));
}
const $f = (...e) => {
  const t = Sf().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const o = Pf(n);
    if (!o) return;
    const s = t._component;
    !V(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
    const a = r(o, !1, Tf(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a;
  }, t;
};
function Tf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pf(e) {
  return fe(e) ? document.querySelector(e) : e;
}
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
function $s(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ts(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $s(Object(r), !0).forEach(function(n) {
      Of(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $s(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Of(e, t, r) {
  return (t = If(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function If(e) {
  var t = Af(e, "string");
  return mr(t) == "symbol" ? t : t + "";
}
function Af(e, t) {
  if (mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  ai() ? ho(e) : t ? e() : _a(e);
}
var jf = 0;
function Ef(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = bt(!1), n = bt(e), o = bt(null), s = to() ? window.document : void 0, a = t.document, i = a === void 0 ? s : a, l = t.immediate, c = l === void 0 ? !0 : l, u = t.manual, f = u === void 0 ? !1 : u, p = t.name, b = p === void 0 ? "style_".concat(++jf) : p, h = t.id, _ = h === void 0 ? void 0 : h, A = t.media, j = A === void 0 ? void 0 : A, L = t.nonce, v = L === void 0 ? void 0 : L, T = t.first, M = T === void 0 ? !1 : T, I = t.onMounted, G = I === void 0 ? void 0 : I, Y = t.onUpdated, R = Y === void 0 ? void 0 : Y, B = t.onLoad, H = B === void 0 ? void 0 : B, O = t.props, J = O === void 0 ? {} : O, se = function() {
  }, _e = function(W) {
    var $e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (i) {
      var Te = Ts(Ts({}, J), $e), me = Te.name || b, be = Te.id || _, _t = Te.nonce || v;
      o.value = i.querySelector('style[data-primevue-style-id="'.concat(me, '"]')) || i.getElementById(be) || i.createElement("style"), o.value.isConnected || (n.value = W || e, Wr(o.value, {
        type: "text/css",
        id: be,
        media: j,
        nonce: _t
      }), M ? i.head.prepend(o.value) : i.head.appendChild(o.value), Ys(o.value, "data-primevue-style-id", me), Wr(o.value, Te), o.value.onload = function(at) {
        return H == null ? void 0 : H(at, {
          name: me
        });
      }, G == null || G(me)), !r.value && (se = gt(n, function(at) {
        o.value.textContent = at, R == null || R(me);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, ae = function() {
    !i || !r.value || (se(), Fc(o.value) && i.head.removeChild(o.value), r.value = !1);
  };
  return c && !f && Lf(_e), {
    id: _,
    name: b,
    el: o,
    css: n,
    unload: ae,
    load: _e,
    isLoaded: fo(r)
  };
}
function br(e) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e);
}
function Ps(e, t) {
  return Mf(e) || Nf(e, t) || Rf(e, t) || zf();
}
function zf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rf(e, t) {
  if (e) {
    if (typeof e == "string") return Os(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Os(e, t) : void 0;
  }
}
function Os(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Nf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, s, a, i = [], l = !0, c = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(l = (n = s.call(r)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw o;
      }
    }
    return i;
  }
}
function Mf(e) {
  if (Array.isArray(e)) return e;
}
function Is(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function On(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Is(Object(r), !0).forEach(function(n) {
      Ff(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Is(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ff(e, t, r) {
  return (t = Vf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vf(e) {
  var t = Bf(e, "string");
  return br(t) == "symbol" ? t : t + "";
}
function Bf(e, t) {
  if (br(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (br(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Df = function(t) {
  var r = t.dt;
  return `
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(r("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(r("icon.size"), `;
}

.p-icon {
    width: `).concat(r("icon.size"), `;
    height: `).concat(r("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(r("mask.background"), `;
    color: `).concat(r("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(r("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(r("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(r("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(r("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, Hf = function(t) {
  var r = t.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(r("scrollbar.width"), `;
}
`);
}, Uf = {}, Kf = {}, le = {
  name: "base",
  css: Hf,
  theme: Df,
  classes: Uf,
  inlineStyles: Kf,
  load: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(s) {
      return s;
    }, o = n(Re(t, {
      dt: nr
    }));
    return ce(o) ? Ef(rr(o), On({
      name: this.name
    }, r)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadTheme: function() {
    var t = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.theme, r, function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return ne.transformCSS(r.name || t.name, "".concat(o).concat(n));
    });
  },
  getCommonTheme: function(t) {
    return ne.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return ne.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return ne.getDirective(this.name, t);
  },
  getPresetTheme: function(t, r, n) {
    return ne.getCustomPreset(this.name, t, r, n);
  },
  getLayerOrderThemeCSS: function() {
    return ne.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var n = Re(this.css, {
        dt: nr
      }) || "", o = rr("".concat(n).concat(t)), s = Object.entries(r).reduce(function(a, i) {
        var l = Ps(i, 2), c = l[0], u = l[1];
        return a.push("".concat(c, '="').concat(u, '"')) && a;
      }, []).join(" ");
      return ce(o) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(s, ">").concat(o, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ne.getCommonStyleSheet(this.name, t, r);
  },
  getThemeStyleSheet: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [ne.getStyleSheet(this.name, t, r)];
    if (this.theme) {
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), s = Re(this.theme, {
        dt: nr
      }), a = rr(ne.transformCSS(o, s)), i = Object.entries(r).reduce(function(l, c) {
        var u = Ps(c, 2), f = u[0], p = u[1];
        return l.push("".concat(f, '="').concat(p, '"')) && l;
      }, []).join(" ");
      ce(a) && n.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(i, ">").concat(a, "</style>"));
    }
    return n.join("");
  },
  extend: function(t) {
    return On(On({}, this), {}, {
      css: void 0,
      theme: void 0
    }, t);
  }
}, Dt = eo();
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function As(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? As(Object(r), !0).forEach(function(n) {
      Gf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : As(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Gf(e, t, r) {
  return (t = Wf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Wf(e) {
  var t = qf(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function qf(e, t) {
  if (gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zf = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [xe.STARTS_WITH, xe.CONTAINS, xe.NOT_CONTAINS, xe.ENDS_WITH, xe.EQUALS, xe.NOT_EQUALS],
    numeric: [xe.EQUALS, xe.NOT_EQUALS, xe.LESS_THAN, xe.LESS_THAN_OR_EQUAL_TO, xe.GREATER_THAN, xe.GREATER_THAN_OR_EQUAL_TO],
    date: [xe.DATE_IS, xe.DATE_IS_NOT, xe.DATE_BEFORE, xe.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, Yf = Symbol();
function Jf(e, t) {
  var r = {
    config: un(t)
  };
  return e.config.globalProperties.$primevue = r, e.provide(Yf, r), Qf(), Xf(e, r), r;
}
var Ht = [];
function Qf() {
  De.clear(), Ht.forEach(function(e) {
    return e == null ? void 0 : e();
  }), Ht = [];
}
function Xf(e, t) {
  var r = bt(!1), n = function() {
    var c;
    if (((c = t.config) === null || c === void 0 ? void 0 : c.theme) !== "none" && !ne.isStyleNameLoaded("common")) {
      var u, f, p = ((u = le.getCommonTheme) === null || u === void 0 ? void 0 : u.call(le)) || {}, b = p.primitive, h = p.semantic, _ = p.global, A = p.style, j = {
        nonce: (f = t.config) === null || f === void 0 || (f = f.csp) === null || f === void 0 ? void 0 : f.nonce
      };
      le.load(b == null ? void 0 : b.css, Vr({
        name: "primitive-variables"
      }, j)), le.load(h == null ? void 0 : h.css, Vr({
        name: "semantic-variables"
      }, j)), le.load(_ == null ? void 0 : _.css, Vr({
        name: "global-variables"
      }, j)), le.loadTheme(Vr({
        name: "global-style"
      }, j), A), ne.setLoadedStyleName("common");
    }
  };
  De.on("theme:change", function(l) {
    r.value || (e.config.globalProperties.$primevue.config.theme = l, r.value = !0);
  });
  var o = gt(t.config, function(l, c) {
    Dt.emit("config:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), s = gt(function() {
    return t.config.ripple;
  }, function(l, c) {
    Dt.emit("config:ripple:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = gt(function() {
    return t.config.theme;
  }, function(l, c) {
    r.value || ne.setTheme(l), t.config.unstyled || n(), r.value = !1, Dt.emit("config:theme:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = gt(function() {
    return t.config.unstyled;
  }, function(l, c) {
    !l && t.config.theme && n(), Dt.emit("config:unstyled:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Ht.push(o), Ht.push(s), Ht.push(a), Ht.push(i);
}
var e0 = {
  install: function(t, r) {
    var n = yc(Zf, r);
    Jf(t, n);
  }
};
const bi = Symbol("FrontendSDK"), t0 = (e, t) => {
  e.provide(bi, t);
}, r0 = () => qt(bi);
var mt = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName: function(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName: function(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, Ls = le.extend({
  name: "common"
});
function hr(e) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hr(e);
}
function n0(e) {
  return vi(e) || o0(e) || hi(e) || gi();
}
function o0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Br(e, t) {
  return vi(e) || s0(e, t) || hi(e, t) || gi();
}
function gi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hi(e, t) {
  if (e) {
    if (typeof e == "string") return js(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? js(e, t) : void 0;
  }
}
function js(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function s0(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, s, a, i = [], l = !0, c = !1;
    try {
      if (s = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = s.call(r)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw o;
      }
    }
    return i;
  }
}
function vi(e) {
  if (Array.isArray(e)) return e;
}
function Es(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Es(Object(r), !0).forEach(function(n) {
      tr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Es(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tr(e, t, r) {
  return (t = a0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function a0(e) {
  var t = i0(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function i0(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(t) {
        t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t) {
        var r = this;
        t ? (this._loadScopedThemeStyles(t), this._themeChangeListener(function() {
          return r._loadScopedThemeStyles(t);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var t, r, n, o, s, a, i, l, c, u, f, p = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, b = p ? (r = this.pt) === null || r === void 0 || (r = r.originalValue) === null || r === void 0 ? void 0 : r[this.$.type.name] : void 0, h = p ? (n = this.pt) === null || n === void 0 || (n = n.value) === null || n === void 0 ? void 0 : n[this.$.type.name] : this.pt;
    (o = h || b) === null || o === void 0 || (o = o.hooks) === null || o === void 0 || (s = o.onBeforeCreate) === null || s === void 0 || s.call(o);
    var _ = (a = this.$primevueConfig) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a._usept, A = _ ? (i = this.$primevue) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i.originalValue : void 0, j = _ ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 ? void 0 : c.pt;
    (u = j || A) === null || u === void 0 || (u = u[this.$.type.name]) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (f = u.onBeforeCreate) === null || f === void 0 || f.call(u), this.$attrSelector = Js("pc");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this.rootEl = Ec(this.$el, '[data-pc-name="'.concat(He(this.$.type.name), '"]')), this.rootEl && (this.$attrSelector && !this.rootEl.hasAttribute(this.$attrSelector) && this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = K({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var r = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), n = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        r == null || r(), n == null || n();
      }
    },
    _mergeProps: function(t) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        n[o - 1] = arguments[o];
      return Qn(t) ? t.apply(void 0, n) : te.apply(void 0, n);
    },
    _loadStyles: function() {
      var t = this, r = function() {
        mt.isStyleNameLoaded("base") || (le.loadCSS(t.$styleOptions), t._loadGlobalStyles(), mt.setLoadedStyleName("base")), t._loadThemeStyles();
      };
      r(), this._themeChangeListener(r);
    },
    _loadCoreStyles: function() {
      var t, r;
      !mt.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (r = this.$style) !== null && r !== void 0 && r.name && (Ls.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), mt.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      ce(t) && le.load(t, K({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, r;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!ne.isStyleNameLoaded("common")) {
          var n, o, s = ((n = this.$style) === null || n === void 0 || (o = n.getCommonTheme) === null || o === void 0 ? void 0 : o.call(n)) || {}, a = s.primitive, i = s.semantic, l = s.global, c = s.style;
          le.load(a == null ? void 0 : a.css, K({
            name: "primitive-variables"
          }, this.$styleOptions)), le.load(i == null ? void 0 : i.css, K({
            name: "semantic-variables"
          }, this.$styleOptions)), le.load(l == null ? void 0 : l.css, K({
            name: "global-variables"
          }, this.$styleOptions)), le.loadTheme(K({
            name: "global-style"
          }, this.$styleOptions), c), ne.setLoadedStyleName("common");
        }
        if (!ne.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (r = this.$style) !== null && r !== void 0 && r.name) {
          var u, f, p, b, h = ((u = this.$style) === null || u === void 0 || (f = u.getComponentTheme) === null || f === void 0 ? void 0 : f.call(u)) || {}, _ = h.css, A = h.style;
          (p = this.$style) === null || p === void 0 || p.load(_, K({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (b = this.$style) === null || b === void 0 || b.loadTheme(K({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), A), ne.setLoadedStyleName(this.$style.name);
        }
        if (!ne.isStyleNameLoaded("layer-order")) {
          var j, L, v = (j = this.$style) === null || j === void 0 || (L = j.getLayerOrderThemeCSS) === null || L === void 0 ? void 0 : L.call(j);
          le.load(v, K({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), ne.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var r, n, o, s = ((r = this.$style) === null || r === void 0 || (n = r.getPresetTheme) === null || n === void 0 ? void 0 : n.call(r, t, "[".concat(this.$attrSelector, "]"))) || {}, a = s.css, i = (o = this.$style) === null || o === void 0 ? void 0 : o.load(a, K({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = i.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      mt.clearLoadedStyleNames(), De.on("theme:change", t);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var r;
      return this[t] || ((r = this._getHostInstance(this)) === null || r === void 0 ? void 0 : r[t]);
    },
    _getOptionValue: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Xn(t, r, n);
    },
    _getPTValue: function() {
      var t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, a = /./g.test(n) && !!o[n.split(".")[0]], i = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, l = i.mergeSections, c = l === void 0 ? !0 : l, u = i.mergeProps, f = u === void 0 ? !1 : u, p = s ? a ? this._useGlobalPT(this._getPTClassValue, n, o) : this._useDefaultPT(this._getPTClassValue, n, o) : void 0, b = a ? void 0 : this._getPTSelf(r, this._getPTClassValue, n, K(K({}, o), {}, {
        global: p || {}
      })), h = this._getPTDatasets(n);
      return c || !c && b ? f ? this._mergeProps(f, p, b, h) : K(K(K({}, p), b), h) : K(K({}, b), h);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        n[o - 1] = arguments[o];
      return te(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(n)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(n))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = "data-pc-", s = n === "root" && ce((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return n !== "transition" && K(K({}, n === "root" && K(K(tr({}, "".concat(o, "name"), He(s ? (r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"] : this.$.type.name)), s && tr({}, "".concat(o, "extend"), He(this.$.type.name))), to() && tr({}, "".concat(this.$attrSelector), ""))), {}, tr({}, "".concat(o, "section"), He(n)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return Oe(t) || tn(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var r = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, s = function(i) {
        var l, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = o ? o(i) : i, f = He(n), p = He(r.$name);
        return (l = c ? f !== p ? u == null ? void 0 : u[f] : void 0 : u == null ? void 0 : u[f]) !== null && l !== void 0 ? l : u;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: s(t.originalValue),
        value: s(t.value)
      } : s(t, !0);
    },
    _usePT: function(t, r, n, o) {
      var s = function(_) {
        return r(_, n, o);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var a, i = t._usept || ((a = this.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, l = i.mergeSections, c = l === void 0 ? !0 : l, u = i.mergeProps, f = u === void 0 ? !1 : u, p = s(t.originalValue), b = s(t.value);
        return p === void 0 && b === void 0 ? void 0 : Oe(b) ? b : Oe(p) ? p : c || !c && b ? f ? this._mergeProps(f, p, b) : K(K({}, p), b) : b;
      }
      return s(t);
    },
    _useGlobalPT: function(t, r, n) {
      return this._usePT(this.globalPT, t, r, n);
    },
    _useDefaultPT: function(t, r, n) {
      return this._usePT(this.defaultPT, t, r, n);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, K(K({}, this.$params), r));
    },
    ptmi: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return te(this.$_attrsWithoutPT, this.ptm(t, r));
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, r, K({
        instance: this
      }, n), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, K(K({}, this.$params), r));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (r) {
        var o = this._getOptionValue(this.$style.inlineStyles, t, K(K({}, this.$params), n)), s = this._getOptionValue(Ls.inlineStyles, t, K(K({}, this.$params), n));
        return [s, o];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, r = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(n) {
        return Re(n, {
          instance: r
        });
      });
    },
    defaultPT: function() {
      var t, r = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(n) {
        return r._getOptionValue(n, r.$name, K({}, r.$params)) || Re(n, K({}, r.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return K(K({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadTheme: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var t;
      return {
        nonce: (t = this.$primevueConfig) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      };
    },
    $primevueConfig: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var r = Br(t, 1), n = r[0];
        return n == null ? void 0 : n.startsWith("pt:");
      }).reduce(function(t, r) {
        var n = Br(r, 2), o = n[0], s = n[1], a = o.split(":"), i = n0(a), l = i.slice(1);
        return l == null || l.reduce(function(c, u, f, p) {
          return !c[u] && (c[u] = f === p.length - 1 ? s : {}), c[u];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var r = Br(t, 1), n = r[0];
        return !(n != null && n.startsWith("pt:"));
      }).reduce(function(t, r) {
        var n = Br(r, 2), o = n[0], s = n[1];
        return t[o] = s, t;
      }, {});
    }
  }
}, l0 = function(t) {
  var r = t.dt;
  return `
.p-card {
    background: `.concat(r("card.background"), `;
    color: `).concat(r("card.color"), `;
    box-shadow: `).concat(r("card.shadow"), `;
    border-radius: `).concat(r("card.border.radius"), `;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(r("card.caption.gap"), `;
}

.p-card-body {
    padding: `).concat(r("card.body.padding"), `;
    display: flex;
    flex-direction: column;
    gap: `).concat(r("card.body.gap"), `;
}

.p-card-title {
    font-size: `).concat(r("card.title.font.size"), `;
    font-weight: `).concat(r("card.title.font.weight"), `;
}

.p-card-subtitle {
    color: `).concat(r("card.subtitle.color"), `;
}
`);
}, c0 = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, u0 = le.extend({
  name: "card",
  theme: l0,
  classes: c0
}), d0 = {
  name: "BaseCard",
  extends: $r,
  style: u0,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, yi = {
  name: "Card",
  extends: d0,
  inheritAttrs: !1
};
function f0(e, t, r, n, o, s) {
  return X(), pe("div", te({
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.header ? (X(), pe("div", te({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [Ot(e.$slots, "header")], 16)) : It("", !0), oe("div", te({
    class: e.cx("body")
  }, e.ptm("body")), [e.$slots.title || e.$slots.subtitle ? (X(), pe("div", te({
    key: 0,
    class: e.cx("caption")
  }, e.ptm("caption")), [e.$slots.title ? (X(), pe("div", te({
    key: 0,
    class: e.cx("title")
  }, e.ptm("title")), [Ot(e.$slots, "title")], 16)) : It("", !0), e.$slots.subtitle ? (X(), pe("div", te({
    key: 1,
    class: e.cx("subtitle")
  }, e.ptm("subtitle")), [Ot(e.$slots, "subtitle")], 16)) : It("", !0)], 16)) : It("", !0), oe("div", te({
    class: e.cx("content")
  }, e.ptm("content")), [Ot(e.$slots, "content")], 16), e.$slots.footer ? (X(), pe("div", te({
    key: 1,
    class: e.cx("footer")
  }, e.ptm("footer")), [Ot(e.$slots, "footer")], 16)) : It("", !0)], 16)], 16);
}
yi.render = f0;
var p0 = function(t) {
  var r = t.dt;
  return `
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(r("textarea.color"), `;
    background: `).concat(r("textarea.background"), `;
    padding: `).concat(r("textarea.padding.y"), " ").concat(r("textarea.padding.x"), `;
    border: 1px solid `).concat(r("textarea.border.color"), `;
    transition: background `).concat(r("textarea.transition.duration"), ", color ").concat(r("textarea.transition.duration"), ", border-color ").concat(r("textarea.transition.duration"), ", outline-color ").concat(r("textarea.transition.duration"), ", box-shadow ").concat(r("textarea.transition.duration"), `;
    appearance: none;
    border-radius: `).concat(r("textarea.border.radius"), `;
    outline-color: transparent;
    box-shadow: `).concat(r("textarea.shadow"), `;
}

.p-textarea:enabled:hover {
    border-color: `).concat(r("textarea.hover.border.color"), `;
}

.p-textarea:enabled:focus {
    border-color: `).concat(r("textarea.focus.border.color"), `;
    box-shadow: `).concat(r("textarea.focus.ring.shadow"), `;
    outline: `).concat(r("textarea.focus.ring.width"), " ").concat(r("textarea.focus.ring.style"), " ").concat(r("textarea.focus.ring.color"), `;
    outline-offset: `).concat(r("textarea.focus.ring.offset"), `;
}

.p-textarea.p-invalid {
    border-color: `).concat(r("textarea.invalid.border.color"), `;
}

.p-textarea.p-variant-filled {
    background: `).concat(r("textarea.filled.background"), `;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(r("textarea.filled.focus.background"), `;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(r("textarea.disabled.background"), `;
    color: `).concat(r("textarea.disabled.color"), `;
}

.p-textarea::placeholder {
    color: `).concat(r("textarea.placeholder.color"), `;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}
`);
}, m0 = {
  root: function(t) {
    var r = t.instance, n = t.props;
    return ["p-textarea p-component", {
      "p-filled": r.filled,
      "p-textarea-resizable ": n.autoResize,
      "p-invalid": n.invalid,
      "p-variant-filled": n.variant ? n.variant === "filled" : r.$primevue.config.inputStyle === "filled" || r.$primevue.config.inputVariant === "filled",
      "p-textarea-fluid": r.hasFluid
    }];
  }
}, b0 = le.extend({
  name: "textarea",
  theme: p0,
  classes: m0
}), g0 = {
  name: "BaseTextarea",
  extends: $r,
  props: {
    modelValue: null,
    autoResize: Boolean,
    invalid: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: b0,
  provide: function() {
    return {
      $pcTextarea: this,
      $parentInstance: this
    };
  }
}, Un = {
  name: "Textarea",
  extends: g0,
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  mounted: function() {
    this.$el.offsetParent && this.autoResize && this.resize();
  },
  updated: function() {
    this.$el.offsetParent && this.autoResize && this.resize();
  },
  methods: {
    resize: function() {
      this.$el.style.height = "auto", this.$el.style.height = this.$el.scrollHeight + "px", parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight) ? (this.$el.style.overflowY = "scroll", this.$el.style.height = this.$el.style.maxHeight) : this.$el.style.overflow = "hidden";
    },
    onInput: function(t) {
      this.autoResize && this.resize(), this.$emit("update:modelValue", t.target.value);
    }
  },
  computed: {
    filled: function() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    ptmParams: function() {
      return {
        context: {
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      };
    },
    hasFluid: function() {
      return zt(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  }
}, h0 = ["value", "aria-invalid"];
function v0(e, t, r, n, o, s) {
  return X(), pe("textarea", te({
    class: e.cx("root"),
    value: e.modelValue,
    "aria-invalid": e.invalid || void 0,
    onInput: t[0] || (t[0] = function() {
      return s.onInput && s.onInput.apply(s, arguments);
    })
  }, e.ptmi("root", s.ptmParams)), null, 16, h0);
}
Un.render = v0;
const y0 = ["aria-selected"], x0 = ["data-is-selected", "data-session-id"], w0 = {
  type: "button",
  "data-pc-name": "button",
  "data-p-disabled": "false",
  "data-p-severity": "contrast",
  class: "!bg-surface-900 border-surface-700 !ring-0 border-none flex-1 relative items-center inline-flex text-center align-bottom justify-center leading-[normal] text-sm py-1.5 px-3 rounded-md bg-transparent border text-surface-900 dark:text-surface-300 border-surface-900 dark:border-surface-300 focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-surface-500 dark:focus:ring-surface-0 hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)] transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none [&>[data-pc-name=badge]]:min-w-4 [&>[data-pc-name=badge]]:h-4 [&>[data-pc-name=badge]]:leading-4"
}, k0 = { class: "text-small" }, _0 = { class: "px-1 whitespace-nowrap" }, C0 = { class: "bg-surface-900 w-10 border-none rounded-md px-2 py-1" }, S0 = /* @__PURE__ */ oe(
  "span",
  { class: "fas fa-close text-surface-900 dark:text-surface-300 hover:text-secondary-400 p-1 transition duration-200 ease-in-out" },
  null,
  -1
  /* HOISTED */
), $0 = [
  S0
], T0 = /* @__PURE__ */ Oa({
  __name: "Tabs",
  props: {
    sessionId: {},
    label: {},
    isSelected: { type: Boolean },
    onClose: { type: Function },
    onSelect: { type: Function },
    onContextMenu: { type: Function }
  },
  setup(e) {
    const t = e, { onClose: r, onSelect: n, onContextMenu: o } = t;
    return (s, a) => (X(), pe("div", {
      role: "tab",
      "aria-selected": t.isSelected,
      onClick: a[1] || (a[1] = //@ts-ignore
      (...i) => Ke(n) && Ke(n)(...i)),
      onContextmenu: a[2] || (a[2] = //@ts-ignore
      (...i) => Ke(o) && Ke(o)(...i)),
      style: { margin: "0" }
    }, [
      oe("div", {
        "data-is-selected": t.isSelected,
        "data-is-editable": "false",
        "data-session-id": t.sessionId
      }, [
        oe(
          "span",
          {
            role: "group",
            class: Cr(["border-[1px] border-surface-700 rounded-md [&>[data-pc-name=button]]:m-0 [&>[data-pc-name=button]]:border-r-none [&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-tr-none [&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-br-none [&>[data-pc-name=button]:nth-child(n+2)]:rounded-tl-none [&>[data-pc-name=button]:nth-child(n+2)]:rounded-bl-none flex", {
              "!border-secondary-400": t.isSelected
            }]),
            "data-pc-name": "buttongroup"
          },
          [
            oe("button", w0, [
              oe("div", k0, [
                oe(
                  "span",
                  _0,
                  qr(t.label),
                  1
                  /* TEXT */
                )
              ])
            ]),
            oe("div", C0, [
              oe("button", {
                "data-pc-name": "button",
                "data-p-disabled": "false",
                onClick: a[0] || (a[0] = _f(
                  //@ts-ignore
                  (...i) => Ke(r) && Ke(r)(...i),
                  ["stop"]
                )),
                class: "cursor-pointer"
              }, $0)
            ])
          ],
          2
          /* CLASS */
        )
      ], 8, x0)
    ], 40, y0));
  }
});
var xi = {
  name: "Portal",
  props: {
    appendTo: {
      type: [String, Object],
      default: "body"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data: function() {
    return {
      mounted: !1
    };
  },
  mounted: function() {
    this.mounted = to();
  },
  computed: {
    inline: function() {
      return this.disabled || this.appendTo === "self";
    }
  }
};
function P0(e, t, r, n, o, s) {
  return s.inline ? Ot(e.$slots, "default", {
    key: 0
  }) : o.mounted ? (X(), Je(pd, {
    key: 1,
    to: r.appendTo
  }, [Ot(e.$slots, "default")], 8, ["to"])) : It("", !0);
}
xi.render = P0;
var ze = eo();
function vr(e) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vr(e);
}
function Dr(e, t, r) {
  return (t = O0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O0(e) {
  var t = I0(e, "string");
  return vr(t) == "symbol" ? t : t + "";
}
function I0(e, t) {
  if (vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var A0 = function(t) {
  var r = t.dt;
  return `
.p-toast {
    width: `.concat(r("toast.width"), `;
    white-space: pre-line;
    word-break: break-word;
}

.p-toast-message {
    margin: 0 0 1rem 0;
}

.p-toast-message-icon {
    flex-shrink: 0;
    font-size: `).concat(r("toast.icon.size"), `;
    width: `).concat(r("toast.icon.size"), `;
    height: `).concat(r("toast.icon.size"), `;
}

.p-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: `).concat(r("toast.content.padding"), `;
    gap: `).concat(r("toast.content.gap"), `;
}

.p-toast-message-text {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: `).concat(r("toast.text.gap"), `;
}

.p-toast-summary {
    font-weight: `).concat(r("toast.summary.font.weight"), `;
    font-size: `).concat(r("toast.summary.font.size"), `;
}

.p-toast-detail {
    font-weight: `).concat(r("toast.detail.font.weight"), `;
    font-size: `).concat(r("toast.detail.font.size"), `;
}

.p-toast-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background `).concat(r("toast.transition.duration"), ", color ").concat(r("toast.transition.duration"), ", outline-color ").concat(r("toast.transition.duration"), ", box-shadow ").concat(r("toast.transition.duration"), `;
    outline-color: transparent;
    color: inherit;
    width: `).concat(r("toast.close.button.width"), `;
    height: `).concat(r("toast.close.button.height"), `;
    border-radius: `).concat(r("toast.close.button.border.radius"), `;
    margin: -25% 0 0 0;
    right: -25%;
    padding: 0;
    border: none;
    user-select: none;
}

.p-toast-message-info,
.p-toast-message-success,
.p-toast-message-warn,
.p-toast-message-error,
.p-toast-message-secondary,
.p-toast-message-contrast {
    border-width: `).concat(r("toast.border.width"), `;
    border-style: solid;
    backdrop-filter: blur(`).concat(r("toast.blur"), `);
    border-radius: `).concat(r("toast.border.radius"), `;
}

.p-toast-close-icon {
    font-size: `).concat(r("toast.close.icon.size"), `;
    width: `).concat(r("toast.close.icon.size"), `;
    height: `).concat(r("toast.close.icon.size"), `;
}

.p-toast-close-button:focus-visible {
    outline-width: `).concat(r("focus.ring.width"), `;
    outline-style: `).concat(r("focus.ring.style"), `;
    outline-offset: `).concat(r("focus.ring.offset"), `;
}

.p-toast-message-info {
    background: `).concat(r("toast.info.background"), `;
    border-color: `).concat(r("toast.info.border.color"), `;
    color: `).concat(r("toast.info.color"), `;
    box-shadow: `).concat(r("toast.info.shadow"), `;
}

.p-toast-message-info .p-toast-detail {
    color: `).concat(r("toast.info.detail.color"), `;
}

.p-toast-message-info .p-toast-close-button:focus-visible {
    outline-color: `).concat(r("toast.info.close.button.focus.ring.color"), `;
    box-shadow: `).concat(r("toast.info.close.button.focus.ring.shadow"), `;
}

.p-toast-message-info .p-toast-close-button:hover {
    background: `).concat(r("toast.info.close.button.hover.background"), `;
}

.p-toast-message-success {
    background: `).concat(r("toast.success.background"), `;
    border-color: `).concat(r("toast.success.border.color"), `;
    color: `).concat(r("toast.success.color"), `;
    box-shadow: `).concat(r("toast.success.shadow"), `;
}

.p-toast-message-success .p-toast-detail {
    color: `).concat(r("toast.success.detail.color"), `;
}

.p-toast-message-success .p-toast-close-button:focus-visible {
    outline-color: `).concat(r("toast.success.close.button.focus.ring.color"), `;
    box-shadow: `).concat(r("toast.success.close.button.focus.ring.shadow"), `;
}

.p-toast-message-success .p-toast-close-button:hover {
    background: `).concat(r("toast.success.close.button.hover.background"), `;
}

.p-toast-message-warn {
    background: `).concat(r("toast.warn.background"), `;
    border-color: `).concat(r("toast.warn.border.color"), `;
    color: `).concat(r("toast.warn.color"), `;
    box-shadow: `).concat(r("toast.warn.shadow"), `;
}

.p-toast-message-warn .p-toast-detail {
    color: `).concat(r("toast.warn.detail.color"), `;
}

.p-toast-message-warn .p-toast-close-button:focus-visible {
    outline-color: `).concat(r("toast.warn.close.button.focus.ring.color"), `;
    box-shadow: `).concat(r("toast.warn.close.button.focus.ring.shadow"), `;
}

.p-toast-message-warn .p-toast-close-button:hover {
    background: `).concat(r("toast.warn.close.button.hover.background"), `;
}

.p-toast-message-error {
    background: `).concat(r("toast.error.background"), `;
    border-color: `).concat(r("toast.error.border.color"), `;
    color: `).concat(r("toast.error.color"), `;
    box-shadow: `).concat(r("toast.error.shadow"), `;
}

.p-toast-message-error .p-toast-detail {
    color: `).concat(r("toast.error.detail.color"), `;
}

.p-toast-message-error .p-toast-close-button:focus-visible {
    outline-color: `).concat(r("toast.error.close.button.focus.ring.color"), `;
    box-shadow: `).concat(r("toast.error.close.button.focus.ring.shadow"), `;
}

.p-toast-message-error .p-toast-close-button:hover {
    background: `).concat(r("toast.error.close.button.hover.background"), `;
}

.p-toast-message-secondary {
    background: `).concat(r("toast.secondary.background"), `;
    border-color: `).concat(r("toast.secondary.border.color"), `;
    color: `).concat(r("toast.secondary.color"), `;
    box-shadow: `).concat(r("toast.secondary.shadow"), `;
}

.p-toast-message-secondary .p-toast-detail {
    color: `).concat(r("toast.secondary.detail.color"), `;
}

.p-toast-message-secondary .p-toast-close-button:focus-visible {
    outline-color: `).concat(r("toast.secondary.close.button.focus.ring.color"), `;
    box-shadow: `).concat(r("toast.secondary.close.button.focus.ring.shadow"), `;
}

.p-toast-message-secondary .p-toast-close-button:hover {
    background: `).concat(r("toast.secondary.close.button.hover.background"), `;
}

.p-toast-message-contrast {
    background: `).concat(r("toast.contrast.background"), `;
    border-color: `).concat(r("toast.contrast.border.color"), `;
    color: `).concat(r("toast.contrast.color"), `;
    box-shadow: `).concat(r("toast.contrast.shadow"), `;
}

.p-toast-message-contrast .p-toast-detail {
    color: `).concat(r("toast.contrast.detail.color"), `;
}

.p-toast-message-contrast .p-toast-close-button:focus-visible {
    outline-color: `).concat(r("toast.contrast.close.button.focus.ring.color"), `;
    box-shadow: `).concat(r("toast.contrast.close.button.focus.ring.shadow"), `;
}

.p-toast-message-contrast .p-toast-close-button:hover {
    background: `).concat(r("toast.contrast.close.button.hover.background"), `;
}

.p-toast-top-center {
    transform: translateX(-50%);
}

.p-toast-bottom-center {
    transform: translateX(-50%);
}

.p-toast-center {
    min-width: 20vw;
    transform: translate(-50%, -50%);
}

.p-toast-message-enter-from {
    opacity: 0;
    transform: translateY(50%);
}

.p-toast-message-leave-from {
    max-height: 1000px;
}

.p-toast .p-toast-message.p-toast-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin-bottom: 0;
    overflow: hidden;
}

.p-toast-message-enter-active {
    transition: transform 0.3s, opacity 0.3s;
}

.p-toast-message-leave-active {
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
}
`);
}, L0 = {
  root: function(t) {
    var r = t.position;
    return {
      position: "fixed",
      top: r === "top-right" || r === "top-left" || r === "top-center" ? "20px" : r === "center" ? "50%" : null,
      right: (r === "top-right" || r === "bottom-right") && "20px",
      bottom: (r === "bottom-left" || r === "bottom-right" || r === "bottom-center") && "20px",
      left: r === "top-left" || r === "bottom-left" ? "20px" : r === "center" || r === "top-center" || r === "bottom-center" ? "50%" : null
    };
  }
}, j0 = {
  root: function(t) {
    var r = t.props;
    return ["p-toast p-component p-toast-" + r.position];
  },
  message: function(t) {
    var r = t.props;
    return ["p-toast-message", {
      "p-toast-message-info": r.message.severity === "info" || r.message.severity === void 0,
      "p-toast-message-warn": r.message.severity === "warn",
      "p-toast-message-error": r.message.severity === "error",
      "p-toast-message-success": r.message.severity === "success",
      "p-toast-message-secondary": r.message.severity === "secondary",
      "p-toast-message-contrast": r.message.severity === "contrast"
    }];
  },
  messageContent: "p-toast-message-content",
  messageIcon: function(t) {
    var r = t.props;
    return ["p-toast-message-icon", Dr(Dr(Dr(Dr({}, r.infoIcon, r.message.severity === "info"), r.warnIcon, r.message.severity === "warn"), r.errorIcon, r.message.severity === "error"), r.successIcon, r.message.severity === "success")];
  },
  messageText: "p-toast-message-text",
  summary: "p-toast-summary",
  detail: "p-toast-detail",
  closeButton: "p-toast-close-button",
  closeIcon: "p-toast-close-icon"
}, E0 = le.extend({
  name: "toast",
  theme: A0,
  classes: j0,
  inlineStyles: L0
}), z0 = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, R0 = le.extend({
  name: "baseicon",
  css: z0
});
function yr(e) {
  "@babel/helpers - typeof";
  return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yr(e);
}
function zs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zs(Object(r), !0).forEach(function(n) {
      N0(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N0(e, t, r) {
  return (t = M0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M0(e) {
  var t = F0(e, "string");
  return yr(t) == "symbol" ? t : t + "";
}
function F0(e, t) {
  if (yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tr = {
  name: "BaseIcon",
  extends: $r,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: R0,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = zt(this.label);
      return Rs(Rs({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  }
}, Kn = {
  name: "CheckIcon",
  extends: Tr
};
function V0(e, t, r, n, o, s) {
  return X(), pe("svg", te({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [oe("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Kn.render = V0;
var Gn = {
  name: "ExclamationTriangleIcon",
  extends: Tr
};
function B0(e, t, r, n, o, s) {
  return X(), pe("svg", te({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [oe("path", {
    d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
    fill: "currentColor"
  }, null, -1), oe("path", {
    d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
    fill: "currentColor"
  }, null, -1), oe("path", {
    d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Gn.render = B0;
var Wn = {
  name: "InfoCircleIcon",
  extends: Tr
};
function D0(e, t, r, n, o, s) {
  return X(), pe("svg", te({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [oe("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Wn.render = D0;
var wi = {
  name: "TimesIcon",
  extends: Tr
};
function H0(e, t, r, n, o, s) {
  return X(), pe("svg", te({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [oe("path", {
    d: "M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
wi.render = H0;
var qn = {
  name: "TimesCircleIcon",
  extends: Tr
};
function U0(e, t, r, n, o, s) {
  return X(), pe("svg", te({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [oe("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
qn.render = U0;
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function Ns(e, t) {
  return q0(e) || W0(e, t) || G0(e, t) || K0();
}
function K0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G0(e, t) {
  if (e) {
    if (typeof e == "string") return Ms(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ms(e, t) : void 0;
  }
}
function Ms(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function W0(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, s, a, i = [], l = !0, c = !1;
    try {
      if (s = (r = r.call(e)).next, t !== 0) for (; !(l = (n = s.call(r)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw o;
      }
    }
    return i;
  }
}
function q0(e) {
  if (Array.isArray(e)) return e;
}
function Fs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fs(Object(r), !0).forEach(function(n) {
      Zn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Zn(e, t, r) {
  return (t = Z0(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z0(e) {
  var t = Y0(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function Y0(e, t) {
  if (xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var D = {
  _getMeta: function() {
    return [Qe(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], Re(Qe(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, r) {
    var n, o, s;
    return (n = (t == null || (o = t.instance) === null || o === void 0 ? void 0 : o.$primevue) || (r == null || (s = r.ctx) === null || s === void 0 || (s = s.appContext) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.globalProperties) === null || s === void 0 ? void 0 : s.$primevue)) === null || n === void 0 ? void 0 : n.config;
  },
  _getOptionValue: Xn,
  _getPTValue: function() {
    var t, r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var L = D._getOptionValue.apply(D, arguments);
      return Oe(L) || tn(L) ? {
        class: L
      } : L;
    }, c = ((t = n.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((r = n.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, u = c.mergeSections, f = u === void 0 ? !0 : u, p = c.mergeProps, b = p === void 0 ? !1 : p, h = i ? D._useDefaultPT(n, n.defaultPT(), l, s, a) : void 0, _ = D._usePT(n, D._getPT(o, n.$name), l, s, q(q({}, a), {}, {
      global: h || {}
    })), A = D._getPTDatasets(n, s);
    return f || !f && _ ? b ? D._mergeProps(n, b, h, _, A) : q(q(q({}, h), _), A) : q(q({}, _), A);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = "data-pc-";
    return q(q({}, r === "root" && Zn({}, "".concat(n, "name"), He(t.$name))), {}, Zn({}, "".concat(n, "section"), He(r)));
  },
  _getPT: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, o = function(a) {
      var i, l = n ? n(a) : a, c = He(r);
      return (i = l == null ? void 0 : l[c]) !== null && i !== void 0 ? i : l;
    };
    return t != null && t.hasOwnProperty("_usept") ? {
      _usept: t._usept,
      originalValue: o(t.originalValue),
      value: o(t.value)
    } : o(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0, a = function(A) {
      return n(A, o, s);
    };
    if (r != null && r.hasOwnProperty("_usept")) {
      var i, l = r._usept || ((i = t.$primevueConfig) === null || i === void 0 ? void 0 : i.ptOptions) || {}, c = l.mergeSections, u = c === void 0 ? !0 : c, f = l.mergeProps, p = f === void 0 ? !1 : f, b = a(r.originalValue), h = a(r.value);
      return b === void 0 && h === void 0 ? void 0 : Oe(h) ? h : Oe(b) ? b : u || !u && h ? p ? D._mergeProps(t, p, b, h) : q(q({}, b), h) : h;
    }
    return a(r);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return D._usePT(t, r, n, o, s);
  },
  _loadStyles: function(t, r, n) {
    var o, s = D._getConfig(r, n), a = {
      nonce: s == null || (o = s.csp) === null || o === void 0 ? void 0 : o.nonce
    };
    D._loadCoreStyles(t.$instance, a), D._loadThemeStyles(t.$instance, a), D._loadScopedThemeStyles(t.$instance, a), D._themeChangeListener(function() {
      return D._loadThemeStyles(t.$instance, a);
    });
  },
  _loadCoreStyles: function() {
    var t, r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (!mt.isStyleNameLoaded((t = n.$style) === null || t === void 0 ? void 0 : t.name) && (r = n.$style) !== null && r !== void 0 && r.name) {
      var s;
      le.loadCSS(o), (s = n.$style) === null || s === void 0 || s.loadCSS(o), mt.setLoadedStyleName(n.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, r, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (!(o != null && o.isUnstyled() || (o == null || (t = o.theme) === null || t === void 0 ? void 0 : t.call(o)) === "none")) {
      if (!ne.isStyleNameLoaded("common")) {
        var a, i, l = ((a = o.$style) === null || a === void 0 || (i = a.getCommonTheme) === null || i === void 0 ? void 0 : i.call(a)) || {}, c = l.primitive, u = l.semantic, f = l.global, p = l.style;
        le.load(c == null ? void 0 : c.css, q({
          name: "primitive-variables"
        }, s)), le.load(u == null ? void 0 : u.css, q({
          name: "semantic-variables"
        }, s)), le.load(f == null ? void 0 : f.css, q({
          name: "global-variables"
        }, s)), le.loadTheme(q({
          name: "global-style"
        }, s), p), ne.setLoadedStyleName("common");
      }
      if (!ne.isStyleNameLoaded((r = o.$style) === null || r === void 0 ? void 0 : r.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
        var b, h, _, A, j = ((b = o.$style) === null || b === void 0 || (h = b.getDirectiveTheme) === null || h === void 0 ? void 0 : h.call(b)) || {}, L = j.css, v = j.style;
        (_ = o.$style) === null || _ === void 0 || _.load(L, q({
          name: "".concat(o.$style.name, "-variables")
        }, s)), (A = o.$style) === null || A === void 0 || A.loadTheme(q({
          name: "".concat(o.$style.name, "-style")
        }, s), v), ne.setLoadedStyleName(o.$style.name);
      }
      if (!ne.isStyleNameLoaded("layer-order")) {
        var T, M, I = (T = o.$style) === null || T === void 0 || (M = T.getLayerOrderThemeCSS) === null || M === void 0 ? void 0 : M.call(T);
        le.load(I, q({
          name: "layer-order",
          first: !0
        }, s)), ne.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, n = t.preset();
    if (n && t.$attrSelector) {
      var o, s, a, i = ((o = t.$style) === null || o === void 0 || (s = o.getPresetTheme) === null || s === void 0 ? void 0 : s.call(o, n, "[".concat(t.$attrSelector, "]"))) || {}, l = i.css, c = (a = t.$style) === null || a === void 0 ? void 0 : a.load(l, q({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, r));
      t.scopedStyleEl = c.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    mt.clearLoadedStyleNames(), De.on("theme:change", t);
  },
  _hook: function(t, r, n, o, s, a) {
    var i, l, c = "on".concat(xc(r)), u = D._getConfig(o, s), f = n == null ? void 0 : n.$instance, p = D._usePT(f, D._getPT(o == null || (i = o.value) === null || i === void 0 ? void 0 : i.pt, t), D._getOptionValue, "hooks.".concat(c)), b = D._useDefaultPT(f, u == null || (l = u.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[t], D._getOptionValue, "hooks.".concat(c)), h = {
      el: n,
      binding: o,
      vnode: s,
      prevVnode: a
    };
    p == null || p(f, h), b == null || b(f, h);
  },
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o];
    return Qn(t) ? t.apply(void 0, n) : te.apply(void 0, n);
  },
  _extend: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = function(a, i, l, c, u) {
      var f, p, b, h;
      i._$instances = i._$instances || {};
      var _ = D._getConfig(l, c), A = i._$instances[t] || {}, j = zt(A) ? q(q({}, r), r == null ? void 0 : r.methods) : {};
      i._$instances[t] = q(q({}, A), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: i,
        $binding: l,
        $modifiers: l == null ? void 0 : l.modifiers,
        $value: l == null ? void 0 : l.value,
        $el: A.$el || i || void 0,
        $style: q({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, r == null ? void 0 : r.style),
        $primevueConfig: _,
        $attrSelector: (f = i.$pd) === null || f === void 0 || (f = f[t]) === null || f === void 0 ? void 0 : f.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return D._getPT(_ == null ? void 0 : _.pt, void 0, function(v) {
            var T;
            return v == null || (T = v.directives) === null || T === void 0 ? void 0 : T[t];
          });
        },
        isUnstyled: function() {
          var v, T;
          return ((v = i.$instance) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.unstyled) !== void 0 ? (T = i.$instance) === null || T === void 0 || (T = T.$binding) === null || T === void 0 || (T = T.value) === null || T === void 0 ? void 0 : T.unstyled : _ == null ? void 0 : _.unstyled;
        },
        theme: function() {
          var v;
          return (v = i.$instance) === null || v === void 0 || (v = v.$primevueConfig) === null || v === void 0 ? void 0 : v.theme;
        },
        preset: function() {
          var v;
          return (v = i.$instance) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.dt;
        },
        /* instance's methods */
        ptm: function() {
          var v, T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return D._getPTValue(i.$instance, (v = i.$instance) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.pt, T, q({}, M));
        },
        ptmo: function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return D._getPTValue(i.$instance, v, T, M, !1);
        },
        cx: function() {
          var v, T, M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (v = i.$instance) !== null && v !== void 0 && v.isUnstyled() ? void 0 : D._getOptionValue((T = i.$instance) === null || T === void 0 || (T = T.$style) === null || T === void 0 ? void 0 : T.classes, M, q({}, I));
        },
        sx: function() {
          var v, T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return M ? D._getOptionValue((v = i.$instance) === null || v === void 0 || (v = v.$style) === null || v === void 0 ? void 0 : v.inlineStyles, T, q({}, I)) : void 0;
        }
      }, j), i.$instance = i._$instances[t], (p = (b = i.$instance)[a]) === null || p === void 0 || p.call(b, i, l, c, u), i["$".concat(t)] = i.$instance, D._hook(t, a, i, l, c, u), i.$pd || (i.$pd = {}), i.$pd[t] = q(q({}, (h = i.$pd) === null || h === void 0 ? void 0 : h[t]), {}, {
        name: t,
        instance: i.$instance
      });
    }, o = function(a) {
      var i, l, c, u, f, p = (i = a.$instance) === null || i === void 0 ? void 0 : i.watch;
      p == null || (l = p.config) === null || l === void 0 || l.call(a.$instance, (c = a.$instance) === null || c === void 0 ? void 0 : c.$primevueConfig), Dt.on("config:change", function(b) {
        var h, _ = b.newValue, A = b.oldValue;
        return p == null || (h = p.config) === null || h === void 0 ? void 0 : h.call(a.$instance, _, A);
      }), p == null || (u = p["config.ripple"]) === null || u === void 0 || u.call(a.$instance, (f = a.$instance) === null || f === void 0 || (f = f.$primevueConfig) === null || f === void 0 ? void 0 : f.ripple), Dt.on("config:ripple:change", function(b) {
        var h, _ = b.newValue, A = b.oldValue;
        return p == null || (h = p["config.ripple"]) === null || h === void 0 ? void 0 : h.call(a.$instance, _, A);
      });
    };
    return {
      created: function(a, i, l, c) {
        a.$pd || (a.$pd = {}), a.$pd[t] = {
          name: t,
          attrSelector: Js("pd")
        }, n("created", a, i, l, c);
      },
      beforeMount: function(a, i, l, c) {
        D._loadStyles(a, i, l), n("beforeMount", a, i, l, c), o(a);
      },
      mounted: function(a, i, l, c) {
        D._loadStyles(a, i, l), n("mounted", a, i, l, c);
      },
      beforeUpdate: function(a, i, l, c) {
        n("beforeUpdate", a, i, l, c);
      },
      updated: function(a, i, l, c) {
        D._loadStyles(a, i, l), n("updated", a, i, l, c);
      },
      beforeUnmount: function(a, i, l, c) {
        n("beforeUnmount", a, i, l, c);
      },
      unmounted: function(a, i, l, c) {
        var u;
        (u = a.$instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), n("unmounted", a, i, l, c);
      }
    };
  },
  extend: function() {
    var t = D._getMeta.apply(D, arguments), r = Ns(t, 2), n = r[0], o = r[1];
    return q({
      extend: function() {
        var a = D._getMeta.apply(D, arguments), i = Ns(a, 2), l = i[0], c = i[1];
        return D.extend(l, q(q(q({}, o), o == null ? void 0 : o.methods), c));
      }
    }, D._extend(n, o));
  }
}, J0 = function(t) {
  var r = t.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(r("ripple.background"), `;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`);
}, Q0 = {
  root: "p-ink"
}, X0 = le.extend({
  name: "ripple-directive",
  theme: J0,
  classes: Q0
}), ep = D.extend({
  style: X0
});
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
function tp(e) {
  return sp(e) || op(e) || np(e) || rp();
}
function rp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function np(e, t) {
  if (e) {
    if (typeof e == "string") return Yn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Yn(e, t) : void 0;
  }
}
function op(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sp(e) {
  if (Array.isArray(e)) return Yn(e);
}
function Yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Vs(e, t, r) {
  return (t = ap(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ap(e) {
  var t = ip(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function ip(e, t) {
  if (wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lp = ep.extend("ripple", {
  watch: {
    "config.ripple": function(t) {
      t ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(t) {
      var r = jc("span", Vs(Vs({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      t.appendChild(r), this.$el = r;
    },
    remove: function(t) {
      var r = this.getInk(t);
      r && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), r.removeEventListener("animationend", this.onAnimationEnd), r.remove());
    },
    onMouseDown: function(t) {
      var r = this, n = t.currentTarget, o = this.getInk(n);
      if (!(!o || getComputedStyle(o, null).display === "none")) {
        if (!this.isUnstyled() && vn(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"), !Mo(o) && !Fo(o)) {
          var s = Math.max(Lc(n), Mc(n));
          o.style.height = s + "px", o.style.width = s + "px";
        }
        var a = Nc(n), i = t.pageX - a.left + document.body.scrollTop - Fo(o) / 2, l = t.pageY - a.top + document.body.scrollLeft - Mo(o) / 2;
        o.style.top = l + "px", o.style.left = i + "px", !this.isUnstyled() && Ac(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          o && (!r.isUnstyled() && vn(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && vn(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? tp(t.children).find(function(r) {
        return zc(r, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), cp = {
  name: "BaseToast",
  extends: $r,
  props: {
    group: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: "top-right"
    },
    autoZIndex: {
      type: Boolean,
      default: !0
    },
    baseZIndex: {
      type: Number,
      default: 0
    },
    breakpoints: {
      type: Object,
      default: null
    },
    closeIcon: {
      type: String,
      default: void 0
    },
    infoIcon: {
      type: String,
      default: void 0
    },
    warnIcon: {
      type: String,
      default: void 0
    },
    errorIcon: {
      type: String,
      default: void 0
    },
    successIcon: {
      type: String,
      default: void 0
    },
    closeButtonProps: {
      type: null,
      default: null
    }
  },
  style: E0,
  provide: function() {
    return {
      $pcToast: this,
      $parentInstance: this
    };
  }
}, ki = {
  name: "ToastMessage",
  hostName: "Toast",
  extends: $r,
  emits: ["close"],
  closeTimeout: null,
  props: {
    message: {
      type: null,
      default: null
    },
    templates: {
      type: Object,
      default: null
    },
    closeIcon: {
      type: String,
      default: null
    },
    infoIcon: {
      type: String,
      default: null
    },
    warnIcon: {
      type: String,
      default: null
    },
    errorIcon: {
      type: String,
      default: null
    },
    successIcon: {
      type: String,
      default: null
    },
    closeButtonProps: {
      type: null,
      default: null
    }
  },
  mounted: function() {
    var t = this;
    this.message.life && (this.closeTimeout = setTimeout(function() {
      t.close({
        message: t.message,
        type: "life-end"
      });
    }, this.message.life));
  },
  beforeUnmount: function() {
    this.clearCloseTimeout();
  },
  methods: {
    close: function(t) {
      this.$emit("close", t);
    },
    onCloseClick: function() {
      this.clearCloseTimeout(), this.close({
        message: this.message,
        type: "close"
      });
    },
    clearCloseTimeout: function() {
      this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null);
    }
  },
  computed: {
    iconComponent: function() {
      return {
        info: !this.infoIcon && Wn,
        success: !this.successIcon && Kn,
        warn: !this.warnIcon && Gn,
        error: !this.errorIcon && qn
      }[this.message.severity];
    },
    closeAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    TimesIcon: wi,
    InfoCircleIcon: Wn,
    CheckIcon: Kn,
    ExclamationTriangleIcon: Gn,
    TimesCircleIcon: qn
  },
  directives: {
    ripple: lp
  }
};
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
function Bs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ds(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bs(Object(r), !0).forEach(function(n) {
      up(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function up(e, t, r) {
  return (t = dp(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dp(e) {
  var t = fp(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function fp(e, t) {
  if (kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pp = ["aria-label"];
function mp(e, t, r, n, o, s) {
  var a = qu("ripple");
  return X(), pe("div", te({
    class: [e.cx("message"), r.message.styleClass],
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, e.ptm("message")), [r.templates.container ? (X(), Je(Nr(r.templates.container), {
    key: 0,
    message: r.message,
    closeCallback: s.onCloseClick
  }, null, 8, ["message", "closeCallback"])) : (X(), pe("div", te({
    key: 1,
    class: [e.cx("messageContent"), r.message.contentStyleClass]
  }, e.ptm("messageContent")), [r.templates.message ? (X(), Je(Nr(r.templates.message), {
    key: 1,
    message: r.message
  }, null, 8, ["message"])) : (X(), pe(he, {
    key: 0
  }, [(X(), Je(Nr(r.templates.messageicon ? r.templates.messageicon : r.templates.icon ? r.templates.icon : s.iconComponent && s.iconComponent.name ? s.iconComponent : "span"), te({
    class: e.cx("messageIcon")
  }, e.ptm("messageIcon")), null, 16, ["class"])), oe("div", te({
    class: e.cx("messageText")
  }, e.ptm("messageText")), [oe("span", te({
    class: e.cx("summary")
  }, e.ptm("summary")), qr(r.message.summary), 17), oe("div", te({
    class: e.cx("detail")
  }, e.ptm("detail")), qr(r.message.detail), 17)], 16)], 64)), r.message.closable !== !1 ? (X(), pe("div", Qc(te({
    key: 2
  }, e.ptm("buttonContainer"))), [Eu((X(), pe("button", te({
    class: e.cx("closeButton"),
    type: "button",
    "aria-label": s.closeAriaLabel,
    onClick: t[0] || (t[0] = function() {
      return s.onCloseClick && s.onCloseClick.apply(s, arguments);
    }),
    autofocus: ""
  }, Ds(Ds({}, r.closeButtonProps), e.ptm("closeButton"))), [(X(), Je(Nr(r.templates.closeicon || "TimesIcon"), te({
    class: [e.cx("closeIcon"), r.closeIcon]
  }, e.ptm("closeIcon")), null, 16, ["class"]))], 16, pp)), [[a]])], 16)) : It("", !0)], 16))], 16);
}
ki.render = mp;
function bp(e) {
  return yp(e) || vp(e) || hp(e) || gp();
}
function gp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hp(e, t) {
  if (e) {
    if (typeof e == "string") return Jn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Jn(e, t) : void 0;
  }
}
function vp(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yp(e) {
  if (Array.isArray(e)) return Jn(e);
}
function Jn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var xp = 0, _i = {
  name: "Toast",
  extends: cp,
  inheritAttrs: !1,
  emits: ["close", "life-end"],
  data: function() {
    return {
      messages: []
    };
  },
  styleElement: null,
  mounted: function() {
    ze.on("add", this.onAdd), ze.on("remove", this.onRemove), ze.on("remove-group", this.onRemoveGroup), ze.on("remove-all-groups", this.onRemoveAllGroups), this.breakpoints && this.createStyle();
  },
  beforeUnmount: function() {
    this.destroyStyle(), this.$refs.container && this.autoZIndex && yn.clear(this.$refs.container), ze.off("add", this.onAdd), ze.off("remove", this.onRemove), ze.off("remove-group", this.onRemoveGroup), ze.off("remove-all-groups", this.onRemoveAllGroups);
  },
  methods: {
    add: function(t) {
      t.id == null && (t.id = xp++), this.messages = [].concat(bp(this.messages), [t]);
    },
    remove: function(t) {
      var r = this.messages.findIndex(function(n) {
        return n.id === t.message.id;
      });
      r !== -1 && (this.messages.splice(r, 1), this.$emit(t.type, {
        message: t.message
      }));
    },
    onAdd: function(t) {
      this.group == t.group && this.add(t);
    },
    onRemove: function(t) {
      this.remove({
        message: t,
        type: "close"
      });
    },
    onRemoveGroup: function(t) {
      this.group === t && (this.messages = []);
    },
    onRemoveAllGroups: function() {
      this.messages = [];
    },
    onEnter: function() {
      this.autoZIndex && yn.set("modal", this.$refs.container, this.baseZIndex || this.$primevue.config.zIndex.modal);
    },
    onLeave: function() {
      var t = this;
      this.$refs.container && this.autoZIndex && zt(this.messages) && setTimeout(function() {
        yn.clear(t.$refs.container);
      }, 200);
    },
    createStyle: function() {
      if (!this.styleElement && !this.isUnstyled) {
        var t;
        this.styleElement = document.createElement("style"), this.styleElement.type = "text/css", Ys(this.styleElement, "nonce", (t = this.$primevue) === null || t === void 0 || (t = t.config) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce), document.head.appendChild(this.styleElement);
        var r = "";
        for (var n in this.breakpoints) {
          var o = "";
          for (var s in this.breakpoints[n])
            o += s + ":" + this.breakpoints[n][s] + "!important;";
          r += `
                        @media screen and (max-width: `.concat(n, `) {
                            .p-toast[`).concat(this.$attrSelector, `] {
                                `).concat(o, `
                            }
                        }
                    `);
        }
        this.styleElement.innerHTML = r;
      }
    },
    destroyStyle: function() {
      this.styleElement && (document.head.removeChild(this.styleElement), this.styleElement = null);
    }
  },
  components: {
    ToastMessage: ki,
    Portal: xi
  }
};
function _r(e) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e);
}
function Hs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hs(Object(r), !0).forEach(function(n) {
      kp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kp(e, t, r) {
  return (t = _p(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _p(e) {
  var t = Cp(e, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function Cp(e, t) {
  if (_r(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sp(e, t, r, n, o, s) {
  var a = Zo("ToastMessage"), i = Zo("Portal");
  return X(), Je(i, null, {
    default: Yr(function() {
      return [oe("div", te({
        ref: "container",
        class: e.cx("root"),
        style: e.sx("root", !0, {
          position: e.position
        })
      }, e.ptmi("root")), [ke(gf, te({
        name: "p-toast-message",
        tag: "div",
        onEnter: s.onEnter,
        onLeave: s.onLeave
      }, wp({}, e.ptm("transition"))), {
        default: Yr(function() {
          return [(X(!0), pe(he, null, Ra(o.messages, function(l) {
            return X(), Je(a, {
              key: l.id,
              message: l,
              templates: e.$slots,
              closeIcon: e.closeIcon,
              infoIcon: e.infoIcon,
              warnIcon: e.warnIcon,
              errorIcon: e.errorIcon,
              successIcon: e.successIcon,
              closeButtonProps: e.closeButtonProps,
              unstyled: e.unstyled,
              onClose: t[0] || (t[0] = function(c) {
                return s.remove(c);
              }),
              pt: e.pt
            }, null, 8, ["message", "templates", "closeIcon", "infoIcon", "warnIcon", "errorIcon", "successIcon", "closeButtonProps", "unstyled", "pt"]);
          }), 128))];
        }),
        _: 1
      }, 16, ["onEnter", "onLeave"])], 16)];
    }),
    _: 1
  });
}
_i.render = Sp;
var Ci = Symbol();
function $p() {
  var e = qt(Ci);
  if (!e)
    throw new Error("No PrimeVue Toast provided!");
  return e;
}
const Tp = { class: "space-y-4" }, Pp = /* @__PURE__ */ oe(
  "h2",
  { class: "text-xl font-bold text-white" },
  "Racer",
  -1
  /* HOISTED */
), Op = { class: "flex gap-2 flex-row flex-wrap" }, Ip = { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, Ap = /* @__PURE__ */ Oa({
  __name: "App",
  setup(e) {
    const t = r0(), r = bt(), n = bt([]), o = bt(""), s = bt(""), a = $p();
    t.backend.onEvent("race-finished", async () => {
      n.value = await t.backend.getSessions(), n.value[0] && (r.value = n.value[0], c()), a.add({
        severity: "success",
        summary: "Finished",
        detail: "Requests sent and received successfully.",
        life: 3e3
      });
    }), t.backend.onEvent("toast", async (u, f, p) => {
      a.add({
        severity: u,
        summary: f,
        detail: p,
        life: 3e3
      });
    });
    function i(u) {
      r.value = u, c();
    }
    function l(u) {
      t.backend.deleteSession(u), n.value = n.value.filter((f) => f.id !== u), n.value[0] ? (r.value = n.value[0], c()) : (r.value = void 0, o.value = "", s.value = "");
    }
    function c() {
      var u, f, p, b, h, _, A;
      o.value = `${(u = r.value) == null ? void 0 : u.request_method} ${(f = r.value) == null ? void 0 : f.request_path} HTTP/2
${(p = r.value) == null ? void 0 : p.request_headers}


${(b = r.value) == null ? void 0 : b.request_body}`, s.value = `HTTP/2 ${(h = r.value) == null ? void 0 : h.response_code}
${(_ = r.value) == null ? void 0 : _.response_headers}


${(A = r.value) == null ? void 0 : A.response_body}`;
    }
    return (u, f) => (X(), pe(
      he,
      null,
      [
        ke(Ke(_i), { position: "bottom-right" }),
        ke(Ke(yi), { class: "w-full h-full" }, {
          content: Yr(() => [
            oe("div", Tp, [
              Pp,
              oe("div", Op, [
                (X(!0), pe(
                  he,
                  null,
                  Ra(n.value, (p) => {
                    var b;
                    return X(), Je(T0, {
                      key: p.id,
                      sessionId: p.id,
                      label: p.id,
                      onClose: () => l(p.id),
                      isSelected: ((b = r.value) == null ? void 0 : b.id) == p.id,
                      onSelect: () => i(p),
                      onContextMenu: (h) => {
                      }
                    }, null, 8, ["sessionId", "label", "onClose", "isSelected", "onSelect"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              oe("div", Ip, [
                ke(Ke(Un), {
                  wrap: "soft",
                  modelValue: o.value,
                  "onUpdate:modelValue": f[0] || (f[0] = (p) => o.value = p),
                  readonly: "",
                  id: "request",
                  class: "resize-none text-lg break-al leading-relaxed h-[75vh]"
                }, null, 8, ["modelValue"]),
                ke(Ke(Un), {
                  wrap: "soft",
                  modelValue: s.value,
                  "onUpdate:modelValue": f[1] || (f[1] = (p) => s.value = p),
                  readonly: "",
                  id: "response",
                  class: "resize-none text-lg break-all leading-relaxed h-[75vh]"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
var Lp = {
  install: function(t) {
    var r = {
      add: function(o) {
        ze.emit("add", o);
      },
      remove: function(o) {
        ze.emit("remove", o);
      },
      removeGroup: function(o) {
        ze.emit("remove-group", o);
      },
      removeAllGroups: function() {
        ze.emit("remove-all-groups");
      }
    };
    t.config.globalProperties.$toast = r, t.provide(Ci, r);
  }
};
const jp = (e) => {
  const t = $f(Ap);
  t.use(e0, {
    unstyled: !0,
    pt: mc
  }), t.use(t0, e), t.use(Lp);
  const r = document.createElement("div");
  Object.assign(r.style, {
    height: "100%",
    width: "100%"
  }), r.id = "plugin--racer", t.mount(r), e.navigation.addPage("/", {
    body: r
  }), e.sidebar.registerItem("Racer", "/racer", {
    icon: "fa-solid fa-truck-fast"
  });
  function n(o) {
    if (o.type == "RequestRowContext" && o.requests[0]) {
      const s = o.requests[0].host;
      let a = !0;
      for (const i of o.requests)
        s !== i.host && (a = !1);
      a == !0 ? (t.config.globalProperties.$toast.add({
        severity: "info",
        summary: "Working",
        detail: "Requests are beint sent...",
        life: 3e3
      }), e.backend.sendRequests(o)) : (t.config.globalProperties.$toast.add({
        severity: "error",
        summary: "Error",
        detail: "The host must be the same for Single Packet Attacks.",
        life: 3e3
      }), e.backend.log("Host Doesn't Match"));
    }
  }
  e.commands.register("send", {
    name: "Race",
    run: n,
    group: "Custom Commands"
  }), e.commands.register("queue", {
    name: "Queue Request",
    run: (o) => e.backend.queueRequest(o),
    group: "Custom Commands"
  }), e.commands.register("send_queue", {
    name: "Race",
    run: () => e.backend.sendQueue(),
    group: "Custom Commands"
  }), e.menu.registerItem({
    type: "RequestRow",
    commandId: "send",
    leadingIcon: "fa-solid fa-truck-fast"
  }), e.menu.registerItem({
    type: "Request",
    commandId: "queue",
    leadingIcon: "fa-solid fa-truck-fast"
  }), e.menu.registerItem({
    type: "RequestRow",
    commandId: "send",
    leadingIcon: "fa-solid fa-truck-fast"
  }), e.menu.registerItem({
    type: "Request",
    commandId: "send_queue",
    leadingIcon: "fa-solid fa-truck-fast"
  });
};
export {
  jp as init
};
