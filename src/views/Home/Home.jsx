import React, {Component} from 'react';
import { Segment, Container, Header, Button, Divider, Card, Image, Icon } from 'semantic-ui-react'
import moblist from 'data/moblist'

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {filter: 'ALL'};
  }

  setFilter(filter='ALL'){
    this.setState({filter})
  }

  render() {
    return (
        <Container className="home page" textAlign='center'>
          <Divider hidden/>
          <Image as='img' size='small' centered src='/img/icon.png'/>
          <Header as='h1'>
            Minecraft Bestiary
            <Header.Subheader>
              ReactJS + react-router + SemanticUI experiment by Avreghly Barra (shrotavre.com)
            </Header.Subheader>
          </Header>
          <Divider hidden/>
          <Button.Group>
            <Button onClick={(evt, data)=>{this.setFilter('ALL')}}>All</Button>
            <Button onClick={(evt, data)=>{this.setFilter('HOSTILE')}}>Hostile</Button>
            <Button onClick={(evt, data)=>{this.setFilter('PASSIVE')}}>Passive</Button>
            <Button onClick={(evt, data)=>{this.setFilter('TAMEABLE')}}>Tameable</Button>
            <Button onClick={(evt, data)=>{this.setFilter('BOSS')}}>Bosses</Button>
          </Button.Group>
          <Divider hidden/>
          <Container>
            <Card.Group itemsPerRow={4}>
              {moblist.map(mob=>{
                  let classFilter;

                switch (this.state.filter) {
                  case 'ALL':
                    classFilter='*' // not really doing anything
                    break;
                  case 'HOSTILE':
                    classFilter='hostile'
                    break;
                  case 'PASSIVE':
                    classFilter='passive'
                    break;
                  case 'TAMEABLE':
                    classFilter='tameable'
                    break;
                  case 'BOSS':
                    classFilter='boss'
                    break;
                  default:
                    return null
                }

                let data = (
                  <Card>
                    <Card.Content textAlign='left'>
                      <Image floated='right' size='mini' src={'/img/bestiary/'+mob.imageSrc}/>
                      <Card.Header>
                        {mob.name}
                      </Card.Header>
                      <Card.Meta>
                        mob-id-{mob.id}
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content textAlign='right'>
                      <Button.Group fluid='true'>
                        <Button disabled>Details</Button>
                        <Button animated>
                          <Button.Content visible>Homepage</Button.Content>
                          <a href={mob.officialURL}>
                            <Button.Content secondary hidden>
                              <Icon name='world' />
                            </Button.Content>
                          </a>
                        </Button>
                      </Button.Group>
                    </Card.Content>
                  </Card>
                )

                if (classFilter==='*' || mob.class.includes(classFilter)) return data;
              })}
            </Card.Group>
          </Container>
          <Divider hidden/>
          <Segment textAlign='center'>
            Made with <i class="fa fa-heart" aria-hidden="true"></i> using ReactJS, SemanticUI, and React-Router by <a href="shrotavre.com">Avreghly Barra</a>
          </Segment>
          <Divider hidden/>
        </Container>
    );
  }
}


export default Home;
