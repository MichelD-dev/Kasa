const Tag = ({
  text,
  className,
  ...props
}: {
  text: string
  className: string
}) => (
  <div className={className} {...props}>
    {text}
  </div>
)

export default Tag
