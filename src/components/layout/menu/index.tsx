import Link from 'next/link'

export const Menu: React.FC = () => {
    const menuItens: MenuItemProps[] = [
        {label: 'Home', href: '/'}, 
        {label: 'Cadastros', href: '/cadastros/produtos'},
        {label: 'Config', href: '/'}
    ]

    return (
      <aside className="column is-2 is-narrow-mobile is-fullheight section">
          <p className="menu-label is-hidden-touch">
              Minhas Vendas
          </p>
          <ul className="menu-list">
              {
                menuItens.map((item, index) => (<MenuItem label={item.label} href={item.href} key={index}/>))
              }
          </ul>
      </aside>
    )
  }

  interface MenuItemProps {
      href: string;
      label: string;
  }

  const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
      return (
        <li>
            <Link href={props.href}>
                <a>
                    <span className="icon"></span>{props.label}
                </a>
            </Link>
        </li>
      )
  }