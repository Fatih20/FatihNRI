module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens : {
      'sm' : '600px',
      'md' : '900px',
    },
    extend: {
      fontFamiy : {
        basic : ['Inter', 'sans-serif'],
      },
      colors : {
        backgroundTopStop : ({opacityVariable}) => `rgba(var(--backgroundTopStop)/var(${opacityVariable}))`,
        backgroundBelowStop : ({opacityVariable}) => `rgba(var(--backgroundBelowStop)/var(${opacityVariable}))`,
        regularText : ({opacityVariable}) => `rgba(var(--regularText)/var(${opacityVariable}))`,
        regularContainer : ({opacityVariable}) => `rgba(var(--regularContainer)/var(${opacityVariable}))`,
        regularContainerBorder : ({opacityVariable}) => `rgba(var(--regularContainerBorder)/var(${opacityVariable}))`,
        regularContainerShadow : ({opacityVariable}) => `rgba(var(--regularContainerShadow)/var(${opacityVariable}))`,
        emphasizedText : ({opacityVariable}) => `rgba(var(--emphasizedText)/var(${opacityVariable}))`,
        emphasizedContainer : ({opacityVariable}) => `rgba(var(--emphasizedContainer)/var(${opacityVariable}))`,
        emphasizedContainerBorder : ({opacityVariable}) => `rgba(var(--emphasizedContainerBorder)/var(${opacityVariable}))`,
        emphasizedContainerShadow : ({opacityVariable}) => `rgba(var(--emphasizedContainerShadow)/var(${opacityVariable}))`,
        unselectedBareText : ({opacityVariable}) => `rgba(var(--unselectedBareText)/var(${opacityVariable}))`,
        aboutToBeSelectedBareText : ({opacityVariable}) => `rgba(var(--aboutToBeSelectedBareText)/var(${opacityVariable}))`,
        standaloneBorder : ({opacityVariable}) => `rgba(var(--standaloneBorder)/var(${opacityVariable}))`,
        scrollbarThumbFill : ({opacityVariable}) => `rgba(var(--scrollbarThumbFill)/var(${opacityVariable}))`,
        scrollbarThumbBorder : ({opacityVariable}) => `rgba(var(--scrollbarThumbBorder)/var(${opacityVariable}))`,
        scrollbarThumbHoveredFill : ({opacityVariable}) => `rgba(var(--scrollbarThumbHoveredFill)/var(${opacityVariable}))`,
        scrollbarThumbHoveredBorder : ({opacityVariable}) => `rgba(var(--scrollbarThumbHoveredBorder)/var(${opacityVariable}))`,
        scrollbarTrackFill : ({opacityVariable}) => `rgba(var(--scrollbarTrackFill)/var(${opacityVariable}))`,
        scrollbarTrackBorder : ({opacityVariable}) => `rgba(var(--scrollbarTrackBorder)/var(${opacityVariable}))`,
        scrollbarTrackHoveredFill : ({opacityVariable}) => `rgba(var(--scrollbarTrackHoveredFill)/var(${opacityVariable}))`,
        scrollbarTrackHoveredBorder : ({opacityVariable}) => `rgba(var(--scrollbarTrackHoveredBorder)/var(${opacityVariable}))`,
      }
    },
  },
  plugins: [],
}
