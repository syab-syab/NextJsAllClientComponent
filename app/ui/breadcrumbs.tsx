import Link from "next/link"

type Props = {
  index: number
  label: string
  href: string

}

const Breadcrumbs = ({
  breadcrumbs,
}: {
  breadcrumbs: Props[]
}) => {
  return (
    <div>
      {
        breadcrumbs.map(breadcrumb => {
          return (
            <span key={breadcrumb.index}>
              <Link href={breadcrumb.href}>
                {breadcrumb.label}
              </Link>
              /
            </span>
          )
        })
      }
    </div>
  )
}

export default Breadcrumbs