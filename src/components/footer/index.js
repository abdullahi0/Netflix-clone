import React from 'react';
import { Container, Row, Column, Link, Text, Title, Break } from './styles/footer';

function Footer({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Footer

Footer.Row = function FooterRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>
}

Footer.Title = function FooterTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Footer.Link = function FooterLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}

Footer.Text = function FooterText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Footer.Break = function FooterBreak({children, ...restProps}){
    return <Break {...restProps}>{children}</Break>
}

Footer.Container = function FooterContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}