import Head from 'next/head'
import Example from '../comps/example'
import Jumbotron from '../comps/jumbotron'
import jumboData  from '../fixtures/jumbo.json'
import {GlobalStyles} from '../comps/global-styles'
import 'normalize.css'

export default function Home() {
  return (
    <>
     <div>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>    
            </Jumbotron.Pane>
            <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
    </>
  )
}
