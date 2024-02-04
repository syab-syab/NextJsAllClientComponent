import Link from "next/link"

type Props = {
  index: number
  label: string
  href: string
  active?: boolean
}

const Breadcrumbs = ({
  breadcrumbs,
}: {
  breadcrumbs: Props[]
}) => {
  const nonActive = { color: '#00000'}

  const active = { color: '#ed4134'}
  return (
    <div>
      <p style={active}>パンくずリスト(仮)</p>
      {
        breadcrumbs.map(breadcrumb => {
          return (
            <span key={breadcrumb.index}>
              <Link
                href={breadcrumb.href}
                style={
                  breadcrumb.active ? active : nonActive
                }
              >
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