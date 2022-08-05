type BIBLE = { [key: string]: string }
type PATH = {
  source: string
  target?: string
  require: string[]
  deny?: string
  prepend?: string
}

interface IBarProps {
  link: {
    href: string
    label: string
    icon?: ReactElement
    children?: IBarProps[]
  }
}

interface ISidebarSectionProps {
  title?: string
  items: IBarProps[]
}
