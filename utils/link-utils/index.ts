import { LINK_TYPES } from "../../lib/constants/linkTypes/index"
import { Link } from "../../lib/sanity/types/common"


export const getLink = (url?: string) => {
  if (url?.startsWith('#')) {
    return String(url)
  }
  if (url?.includes('#')) {
    const url_pre = url?.startsWith('/') ? url : '/' + String(url)
    const url_final = 
      url_pre.endsWith('/') || url_pre.includes('#') ? url_pre : url_pre + '/'
    return url_final
  }
  const url_pre = url?.startsWith('/') ? url : '/' + String(url)
  const url_final = url_pre[url_pre.length - 1] == '/' ? url_pre : url_pre + '/'
  return url_final
}
export const removeParams = (path = '') =>
  path.split('?')[0].endsWith('/')
    ? path.split('?')[0].slice(0, -1)
    : path.split('?')[0]
export const checkLinkIsActive = (source: string, current: string) =>
  removeParams(source) === removeParams(current)
export const getPageLinkFromSlug = (
  slug: string,
  type: string = 'page',
  anchor?: string,
) => {
  switch (type) {
    case 'post':
      return '/posts' + getLink(slug) + (anchor ? `#${anchor}` : '')
    default:
      return getLink(slug) + (anchor ? `#${anchor}` : '')
  }
}
export const resolveUrl = (link: Link) => {
  switch (link.type) {
    case LINK_TYPES.sectionReference:
      return link?.url ?? '#'
    case LINK_TYPES.reference:
      return getPageLinkFromSlug(link?.slug, link?.pageType, link?.pageAnchor)
    default:
      return link?.url
  }
}
