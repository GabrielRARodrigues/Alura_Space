import { useState } from 'react'
import Tags from '../Tags'
import Cards from './Cards'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map(foto => foto.tag))]

  const filtraFotos = tag => {
    const novasFotos = fotos.filter(foto => foto.tag === tag)
    setItens(novasFotos)
  }

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
      <Cards itens={itens} styles={styles} />
    </section>
  )
}
