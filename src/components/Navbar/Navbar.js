import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
          return(
                    <nav>
                              <h3>MB Interiores</h3>
                              <div>
                                        <button>Cocina</button>
                                        <button>Living</button>
                                        <button>Baño</button>
                                        <button>Habitación</button>
                                        <button>Exteriores</button>
                              </div>
                              <CartWidget/>
                    </nav>
          )
}

export default NavBar
