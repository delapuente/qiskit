/* This code is part of Qiskit.
 *
 * (C) Copyright IBM 2019.
 *
 * This code is licensed under the Apache License, Version 2.0. You may
 * obtain a copy of this license in the LICENSE.txt file in the root directory
 * of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Any modifications or derivative works of this code must retain this
 * copyright notice, and modified files need to carry a notice indicating
 * that they have been altered from the originals.
 */

jQuery(() => {
  const { __html_context__ } = window
  if (typeof __html_context__ !== 'object') {
    console.warn('Missing window.__html_context__')
    return
  }

  getVersionList().then(versionList => {
    jQuery('#version-switcher').after(getVersionTags(versionList))

    jQuery('.version').click((evt) => {
      const hash = window.location.hash
      const complete_url = evt.target.href + hash
      window.location = complete_url
      evt.preventDefault()
    })
  })

  function getVersionList() {
    return Promise.resolve([
      'latest', '0.14.0', '0.12.0', '0.11.0'
    ])
  }

  function getVersionTags(versionList) {
    const { pagename, content_prefix } = __html_context__
    return versionList.reduce((html, version) => {
      return html + `
        <dd><a class="version" href="${getVersionUrl(version, pagename, content_prefix)}">${version}</a></dd>`
    }, '')
  }

  function getVersionUrl(version, pagename, contentPrefix) {
    const prefix = contentPrefix ? `/${contentPrefix}` : ''
    const versionBase = version !== 'latest' ? `/stable/${version}` : ''
    return `${prefix}${versionBase}/${pagename}.html`
  }
})