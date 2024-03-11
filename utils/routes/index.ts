export const routes = {
  webPage: (slug: string) => (slug.startsWith('/') ? slug : `/${slug}`),
  post: (slug: string) =>
    slug.startsWith('/') ? `/posts${slug}` : `/posts/${slug}`,
  contactSuccess : '/contact-success'
}
export const getRoute = ({ slug, type }: { type: string; slug: string }) => {
  switch (type) {
    case 'post':
      return routes.post(slug)
    default:
      return routes.webPage(slug)
  }
}
