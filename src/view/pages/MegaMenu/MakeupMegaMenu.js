import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  background: #faf9f9 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  width: fit-content;
  padding: 20px;
  margin-top: -8px;
  margin-bottom: -8px;
`

const Cover = styled.div`
//   margin-left: 10px;
`


const List = styled.ul`
  list-style: none;
  text-align: left;
  font-weight: lighter;
  font-family: 'Open Sans Condensed', sans-serif;
`

const ListItem = styled.li`
  justify-content: left;
  color: #545453;
  align-items: center;
  padding-bottom: 10px;
  letter-spacing: 0.36px;
  font-size: 14px;
  cursor:pointer;
`

const MakeupMegaMenu = () => {
    return (
        <Container>
            <Cover>
                <List>
                    <ListItem><b>FACE</b></ListItem>
                    <ListItem>Face Primer</ListItem>
                    <ListItem><b>Color Corrector</b></ListItem>
                    <ListItem>Concealer</ListItem>
                    <ListItem>BB & CC Cream</ListItem>
                    <ListItem>Tinted Moisturizer</ListItem>
                    <ListItem>Foundation</ListItem>
                    <ListItem>Compact</ListItem>
                    <ListItem>Blush</ListItem>
                    <ListItem>Bronzer</ListItem>
                    <ListItem>Highlighters & illuminators</ListItem>
                    <ListItem>Setting Spray</ListItem>
                    <ListItem>Face Palettes and Sets </ListItem>
                    <ListItem>Makeup Remover</ListItem>
                </List>
            </Cover>
            <Cover>
                <List>
                    <ListItem><b>EYES</b></ListItem>
                    <ListItem>Under Eye Concealer</ListItem>
                    <ListItem>Eye Primer</ListItem>
                    <ListItem>Kajal</ListItem>
                    <ListItem>Eye Pencil</ListItem>
                    <ListItem>Eyeliner</ListItem>
                    <ListItem>Mascara</ListItem>
                    <ListItem>Eye Shadow</ListItem>
                    <ListItem>Eye Brow Enhancers Remover</ListItem>
                    <ListItem>False Eyelashes </ListItem>
                    <ListItem>Eye Palettes and Sets </ListItem>
                    <ListItem>Eye Makeup</ListItem>
                </List>
            </Cover>
            <Cover>
                <List>
                    <ListItem><b>LIPS</b></ListItem>
                    <ListItem>Lip Liner</ListItem>
                    <ListItem>Lipstick</ListItem>
                    <ListItem>Lip Gloss</ListItem>
                    <ListItem>Lips Stain and Tint</ListItem>
                    <ListItem>Lip Balm </ListItem>
                    <ListItem>Lip Plumper </ListItem>
                    <ListItem>Lip Palettes and Sets</ListItem>
                </List>
            </Cover>
            <Cover>
                <List>
                    <ListItem><b>NAILS</b></ListItem>
                    <ListItem>Nail Polish</ListItem>
                    <ListItem>Nail Art Kits</ListItem>
                    <ListItem>Nail Polish Sets</ListItem>
                    <ListItem>Base and Top Coats</ListItem>
                    <ListItem>Nail Treatments</ListItem>
                    <ListItem>Nail Polish Remover </ListItem>
                    <ListItem>Manicure & Pedicure Kits</ListItem>
                </List>
            </Cover>
            <Cover>
                <List>
                    <ListItem><b>TOPBRANDS</b></ListItem>
                    <ListItem>Huda Beauty</ListItem>
                    <ListItem>Charlotte Tilbury</ListItem>
                    <ListItem>M.A.C</ListItem>
                    <ListItem>Maybelline New York</ListItem>
                    <ListItem>L'Oréal Paris </ListItem>
                    <ListItem>Lakmé </ListItem>
                    <ListItem>NYX Professional Makeup</ListItem>
                </List>
            </Cover>
            <Cover>
                <List>
                    <ListItem><b>TRENDING SEARCHES</b></ListItem>
                    <ListItem>Zoom Makeup Essentials</ListItem>
                    <ListItem>Nude Lipsticks</ListItem>
                    <ListItem>Transfer-Proof Foundation</ListItem>
                    <ListItem>Liquid Lipstick </ListItem>
                    <ListItem>Red Lipstick </ListItem>
                    <ListItem>No-Makeup Makeup</ListItem>
                </List>
            </Cover>
            <Cover>
                <List>
                    <ListItem><b>MAKEUP VALUES& GIFT SETS</b></ListItem>
                    <ListItem><b>SALON SERVICES</b></ListItem>
                    <ListItem>Makeup</ListItem>
                </List>
            </Cover>
        </Container>
    )
}

export default MakeupMegaMenu;
