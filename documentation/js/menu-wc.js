'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">MentalHealthSupport_APP documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AddContactPageModule.html" data-type="entity-link" >AddContactPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddContactPageModule-e7344bb3cdf5aaebcb40c03d62c43c89ac4838b80dcd21d198886e2d937af055135882a5b789fda5b22fe21ad75d97d809b9b53694430b0669bab4d4e8c1c5b5"' : 'data-target="#xs-components-links-module-AddContactPageModule-e7344bb3cdf5aaebcb40c03d62c43c89ac4838b80dcd21d198886e2d937af055135882a5b789fda5b22fe21ad75d97d809b9b53694430b0669bab4d4e8c1c5b5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddContactPageModule-e7344bb3cdf5aaebcb40c03d62c43c89ac4838b80dcd21d198886e2d937af055135882a5b789fda5b22fe21ad75d97d809b9b53694430b0669bab4d4e8c1c5b5"' :
                                            'id="xs-components-links-module-AddContactPageModule-e7344bb3cdf5aaebcb40c03d62c43c89ac4838b80dcd21d198886e2d937af055135882a5b789fda5b22fe21ad75d97d809b9b53694430b0669bab4d4e8c1c5b5"' }>
                                            <li class="link">
                                                <a href="components/AddContactPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddContactPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddContactPageRoutingModule.html" data-type="entity-link" >AddContactPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5c2692ed6772b152af4e6197ba6af989fbffa1b7924ae2600dc7905f07f7fb782f5b0475621d4bf2cf218dbb0a9a859afd9f8af469ee5087f41d4ed325e36dc5"' : 'data-target="#xs-components-links-module-AppModule-5c2692ed6772b152af4e6197ba6af989fbffa1b7924ae2600dc7905f07f7fb782f5b0475621d4bf2cf218dbb0a9a859afd9f8af469ee5087f41d4ed325e36dc5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5c2692ed6772b152af4e6197ba6af989fbffa1b7924ae2600dc7905f07f7fb782f5b0475621d4bf2cf218dbb0a9a859afd9f8af469ee5087f41d4ed325e36dc5"' :
                                            'id="xs-components-links-module-AppModule-5c2692ed6772b152af4e6197ba6af989fbffa1b7924ae2600dc7905f07f7fb782f5b0475621d4bf2cf218dbb0a9a859afd9f8af469ee5087f41d4ed325e36dc5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContactsPageModule.html" data-type="entity-link" >ContactsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactsPageModule-07ea584cd3b130239bd7b89ea7bb88db76f29ea6521c56705a5323494ac9b978417c38d88ef492a3f05daa8caf4053271ed1a956f362171977504528895f7789"' : 'data-target="#xs-components-links-module-ContactsPageModule-07ea584cd3b130239bd7b89ea7bb88db76f29ea6521c56705a5323494ac9b978417c38d88ef492a3f05daa8caf4053271ed1a956f362171977504528895f7789"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactsPageModule-07ea584cd3b130239bd7b89ea7bb88db76f29ea6521c56705a5323494ac9b978417c38d88ef492a3f05daa8caf4053271ed1a956f362171977504528895f7789"' :
                                            'id="xs-components-links-module-ContactsPageModule-07ea584cd3b130239bd7b89ea7bb88db76f29ea6521c56705a5323494ac9b978417c38d88ef492a3f05daa8caf4053271ed1a956f362171977504528895f7789"' }>
                                            <li class="link">
                                                <a href="components/ContactsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactsPageRoutingModule.html" data-type="entity-link" >ContactsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DefineMessagePageModule.html" data-type="entity-link" >DefineMessagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DefineMessagePageModule-fc02f3b8fc95edaa17ffe990e7596351f43daf61ffad1ed09768c096ad310f231400aae7f3a82dc7c699b3ec04d120558bb18dcca6cc2c7dd5f7aadd961de654"' : 'data-target="#xs-components-links-module-DefineMessagePageModule-fc02f3b8fc95edaa17ffe990e7596351f43daf61ffad1ed09768c096ad310f231400aae7f3a82dc7c699b3ec04d120558bb18dcca6cc2c7dd5f7aadd961de654"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DefineMessagePageModule-fc02f3b8fc95edaa17ffe990e7596351f43daf61ffad1ed09768c096ad310f231400aae7f3a82dc7c699b3ec04d120558bb18dcca6cc2c7dd5f7aadd961de654"' :
                                            'id="xs-components-links-module-DefineMessagePageModule-fc02f3b8fc95edaa17ffe990e7596351f43daf61ffad1ed09768c096ad310f231400aae7f3a82dc7c699b3ec04d120558bb18dcca6cc2c7dd5f7aadd961de654"' }>
                                            <li class="link">
                                                <a href="components/DefineMessagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefineMessagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DefineMessagePageRoutingModule.html" data-type="entity-link" >DefineMessagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-da68e1a46f0aca3c5e52fea71c803e18a34e12c460e3be6c194a92019c9b24665c5d1affedd48f040a791b96a9625732127ede886306ff82b47d9961ceb6c275"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-da68e1a46f0aca3c5e52fea71c803e18a34e12c460e3be6c194a92019c9b24665c5d1affedd48f040a791b96a9625732127ede886306ff82b47d9961ceb6c275"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-da68e1a46f0aca3c5e52fea71c803e18a34e12c460e3be6c194a92019c9b24665c5d1affedd48f040a791b96a9625732127ede886306ff82b47d9961ceb6c275"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-da68e1a46f0aca3c5e52fea71c803e18a34e12c460e3be6c194a92019c9b24665c5d1affedd48f040a791b96a9625732127ede886306ff82b47d9961ceb6c275"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-061e84e8b11b60cf9451ed0ecdb5e8d16b5f47f16bbac90a1590686e8a5af71e32f8c13624e2f59b9a1d4bca5d08c47da71c9b94db1bca4b2da89d75be3c8b29"' : 'data-target="#xs-components-links-module-HomePageModule-061e84e8b11b60cf9451ed0ecdb5e8d16b5f47f16bbac90a1590686e8a5af71e32f8c13624e2f59b9a1d4bca5d08c47da71c9b94db1bca4b2da89d75be3c8b29"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-061e84e8b11b60cf9451ed0ecdb5e8d16b5f47f16bbac90a1590686e8a5af71e32f8c13624e2f59b9a1d4bca5d08c47da71c9b94db1bca4b2da89d75be3c8b29"' :
                                            'id="xs-components-links-module-HomePageModule-061e84e8b11b60cf9451ed0ecdb5e8d16b5f47f16bbac90a1590686e8a5af71e32f8c13624e2f59b9a1d4bca5d08c47da71c9b94db1bca4b2da89d75be3c8b29"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LiveSessionPageModule.html" data-type="entity-link" >LiveSessionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LiveSessionPageModule-09548ef2795fc15fbdb91fd5d9c67b0f99fcad204e9bb0b35f5ad475365082103706a403a1b8d94ce9ea2c180befd450d3571aad491b5aff805c84e154880a71"' : 'data-target="#xs-components-links-module-LiveSessionPageModule-09548ef2795fc15fbdb91fd5d9c67b0f99fcad204e9bb0b35f5ad475365082103706a403a1b8d94ce9ea2c180befd450d3571aad491b5aff805c84e154880a71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LiveSessionPageModule-09548ef2795fc15fbdb91fd5d9c67b0f99fcad204e9bb0b35f5ad475365082103706a403a1b8d94ce9ea2c180befd450d3571aad491b5aff805c84e154880a71"' :
                                            'id="xs-components-links-module-LiveSessionPageModule-09548ef2795fc15fbdb91fd5d9c67b0f99fcad204e9bb0b35f5ad475365082103706a403a1b8d94ce9ea2c180befd450d3571aad491b5aff805c84e154880a71"' }>
                                            <li class="link">
                                                <a href="components/LiveSessionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveSessionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LiveSessionPageRoutingModule.html" data-type="entity-link" >LiveSessionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PredefineMessagePageModule.html" data-type="entity-link" >PredefineMessagePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PredefineMessagePageModule-e75a687c383b6ebfced3877e7b3aceab91c6dd50bd8fb13f5ccd35c01793985103209c998eacf849548b0a90635643ed044ae6776f5cb9bc047f13156a9c1c35"' : 'data-target="#xs-components-links-module-PredefineMessagePageModule-e75a687c383b6ebfced3877e7b3aceab91c6dd50bd8fb13f5ccd35c01793985103209c998eacf849548b0a90635643ed044ae6776f5cb9bc047f13156a9c1c35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PredefineMessagePageModule-e75a687c383b6ebfced3877e7b3aceab91c6dd50bd8fb13f5ccd35c01793985103209c998eacf849548b0a90635643ed044ae6776f5cb9bc047f13156a9c1c35"' :
                                            'id="xs-components-links-module-PredefineMessagePageModule-e75a687c383b6ebfced3877e7b3aceab91c6dd50bd8fb13f5ccd35c01793985103209c998eacf849548b0a90635643ed044ae6776f5cb9bc047f13156a9c1c35"' }>
                                            <li class="link">
                                                <a href="components/PredefineMessagePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PredefineMessagePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PredefineMessagePageRoutingModule.html" data-type="entity-link" >PredefineMessagePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageModule.html" data-type="entity-link" >SignUpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignUpPageModule-4d638d778e6852e6b5941d46b8af89e116e60189173fea14906eb9cb31000828929e77c0dfa3307862f32d09d2aafbc1069fbdcc82732626eb99021c2141b10b"' : 'data-target="#xs-components-links-module-SignUpPageModule-4d638d778e6852e6b5941d46b8af89e116e60189173fea14906eb9cb31000828929e77c0dfa3307862f32d09d2aafbc1069fbdcc82732626eb99021c2141b10b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignUpPageModule-4d638d778e6852e6b5941d46b8af89e116e60189173fea14906eb9cb31000828929e77c0dfa3307862f32d09d2aafbc1069fbdcc82732626eb99021c2141b10b"' :
                                            'id="xs-components-links-module-SignUpPageModule-4d638d778e6852e6b5941d46b8af89e116e60189173fea14906eb9cb31000828929e77c0dfa3307862f32d09d2aafbc1069fbdcc82732626eb99021c2141b10b"' }>
                                            <li class="link">
                                                <a href="components/SignUpPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignUpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageRoutingModule.html" data-type="entity-link" >SignUpPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link" >Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-a8666fb3f521cd16976acab2e9a73d80e5b54af621bde33400030c5cf69a1ddb04df3f209fa84290cc49bff82c996dac98a859a4296f8f474d5b65e9b409a240"' : 'data-target="#xs-components-links-module-Tab1PageModule-a8666fb3f521cd16976acab2e9a73d80e5b54af621bde33400030c5cf69a1ddb04df3f209fa84290cc49bff82c996dac98a859a4296f8f474d5b65e9b409a240"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-a8666fb3f521cd16976acab2e9a73d80e5b54af621bde33400030c5cf69a1ddb04df3f209fa84290cc49bff82c996dac98a859a4296f8f474d5b65e9b409a240"' :
                                            'id="xs-components-links-module-Tab1PageModule-a8666fb3f521cd16976acab2e9a73d80e5b54af621bde33400030c5cf69a1ddb04df3f209fa84290cc49bff82c996dac98a859a4296f8f474d5b65e9b409a240"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link" >Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link" >Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-483a1f6a257232d8c0126fc795a6637992f3d4156b5af2b79e05ffcb7ae919a361f17fe163c190c15a3a1c9e463cd999269145a82c924dbc9eb4ef6a54a237bb"' : 'data-target="#xs-components-links-module-Tab2PageModule-483a1f6a257232d8c0126fc795a6637992f3d4156b5af2b79e05ffcb7ae919a361f17fe163c190c15a3a1c9e463cd999269145a82c924dbc9eb4ef6a54a237bb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-483a1f6a257232d8c0126fc795a6637992f3d4156b5af2b79e05ffcb7ae919a361f17fe163c190c15a3a1c9e463cd999269145a82c924dbc9eb4ef6a54a237bb"' :
                                            'id="xs-components-links-module-Tab2PageModule-483a1f6a257232d8c0126fc795a6637992f3d4156b5af2b79e05ffcb7ae919a361f17fe163c190c15a3a1c9e463cd999269145a82c924dbc9eb4ef6a54a237bb"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link" >Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' : 'data-target="#xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' :
                                            'id="xs-components-links-module-Tab3PageModule-8a513e21870ca5c4137a1f59a3fa769a3a66c60fc02f2c80e0ea68c23842c16942778c434e8a226f207525ff4227df8f83c9a1ecbeefc26840cea02dd1078273"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-2f2b2edd0983daf7d7ee3f1e9a70264ff2d28550a62065c56d2177a748408e7b58700f70db55129742c2c04f8740ab1a14ca4ef6d20f8104017e8f23afd19a4a"' : 'data-target="#xs-components-links-module-TabsPageModule-2f2b2edd0983daf7d7ee3f1e9a70264ff2d28550a62065c56d2177a748408e7b58700f70db55129742c2c04f8740ab1a14ca4ef6d20f8104017e8f23afd19a4a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-2f2b2edd0983daf7d7ee3f1e9a70264ff2d28550a62065c56d2177a748408e7b58700f70db55129742c2c04f8740ab1a14ca4ef6d20f8104017e8f23afd19a4a"' :
                                            'id="xs-components-links-module-TabsPageModule-2f2b2edd0983daf7d7ee3f1e9a70264ff2d28550a62065c56d2177a748408e7b58700f70db55129742c2c04f8740ab1a14ca4ef6d20f8104017e8f23afd19a4a"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link" >FirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayMessageService.html" data-type="entity-link" >PlayMessageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DefinedMessage.html" data-type="entity-link" >DefinedMessage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileData.html" data-type="entity-link" >ProfileData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});