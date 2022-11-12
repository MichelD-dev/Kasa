interface Props {
  text: string
  className?: string
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const Tag = ({text, className, ...props}: Props) => (
  <div className={className} {...props}>
    {text}
  </div>
)

export default Tag
