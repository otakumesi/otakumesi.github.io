import * as React from 'react'

const jsonLdOfOtakumesi = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "https://otakumesi.io/",
  "name": "otakumesi",
  "alternateName": "新妻巧朗",
  "jobTitle": "Web Developer",
  "worksFor": "Livsense Inc."
}

const JsonLd = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdOfOtakumesi)}} />
  )
}

export default JsonLd
