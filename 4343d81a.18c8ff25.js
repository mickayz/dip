(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var o=a(1),r=a(9),n=(a(0),a(197)),i={lip:6,title:"Libra Validator Configuration Management",authors:"Valeria Nikolaenko, David Wolinsky, Sam Blackshear, David Dill",status:"draft",type:"informational",created:"07/30/2020"},l={id:"lip-6",title:"Libra Validator Configuration Management",description:"# Summary",source:"@site/all-docs__GENERATED/lip-6.md",permalink:"/lip-6",editUrl:"https://github.com/libra/lip/edit/master/all-docs__GENERATED/lip-6.md"},c=[{value:"Validator Set",id:"validator-set",children:[{value:"Move Modules",id:"move-modules",children:[]},{value:"Transaction Scripts",id:"transaction-scripts",children:[]},{value:"Formal verification guarantees on the Move Implementation",id:"formal-verification-guarantees-on-the-move-implementation",children:[]},{value:"Notes",id:"notes",children:[]}]},{value:"Registered Currencies",id:"registered-currencies",children:[]},{value:"Libra Version",id:"libra-version",children:[]},{value:"Libra Virtual Machine Configuration",id:"libra-virtual-machine-configuration",children:[]}],s={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"summary"},"Summary"),Object(n.b)("p",null,"This LIP describes the conceptual model and implementation of the on-chain configuration management on the Libra blockchain, this includes the validator set, registerred currencies, VM config and Libra version."),Object(n.b)("h1",{id:"abstract--overview"},"Abstract / Overview"),Object(n.b)("p",null,"The Libra Payment Network (\u201cLPN\u201d) is a blockchain-backed payment platform and an infrastructure for stablecoins that supports a regulated global digital payment network. Both the blockchain and the stablecoin financial instruments are controlled by Libra Networks, Ltd. (\u201cLibra Networks\u201d or \u201cLN\u201d) a subsidiary of the Libra Association  (the \u201cAssociation\u201d or \u201cLA\u201d).  LPN operates under a payment system license from FINMA (the \u201cFINMA License\u201d), and LN is responsible for ensuring that LPN operates in compliance with the FINMA License."),Object(n.b)("p",null,"The Libra Association is an independent membership organization that is responsible for the governance of the LPN and the development of the Libra project. The Association is governed by the Council, which is comprised of one representative per Association member. The Association Council manages the technology roadmap of the platform and oversees and maintains the Libra Improvement Proposal and Libra Upgrade Process, often through subcommittees of the Council such as the Technical Steering Committee (the \u201cTSC\u201d) and the Association Board. "),Object(n.b)("p",null,"Each member of the Libra Association is expected to run a replica, called a Validator Node, to participate in the Libra Protocol to jointly maintain a database of programmable resources. Validator Nodes process transactions and interact with each other to reach consensus on the state of the blockchain.\nThe Validator Set defines a subset of Validator Nodes that run the Libra Protocol at any moment of time. The Association determines which Validator Nodes are in the set by adding and removing them.  Reasons for changing the Validator Set include joining or departure of members from the Association and actions needed to comply with LN\u2019s obligations under its payment system license from FINMA to guarantee the secure and performant operation of the platform. The protocol remains safe when at most a third minus one of the Validator Nodes in the Validator Set are byzantine. The Validator Set is one of global on-chain configurations for the Libra Protocol."),Object(n.b)("p",null,"TODO (@tzakian): explain the registered currencies on-chain config."),Object(n.b)("p",null,"TODO (@runtian-zhou): explain the libra version on-chain config."),Object(n.b)("p",null,"TODO (@runtian-zhou): explain the libra VM config."),Object(n.b)("h1",{id:"terminology"},"Terminology"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Validator Node"),' ("node") is a replica that runs the Libra Protocol to maintain a database of programmable resources. Validator Node processes transactions and interacts with other Validator Nodes to reach consensus on the ordering of transactions and the resulting state of the database after transactions\' executions.'),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Validator Config")," is an on-chain resource that stores information about the Validator Node. It includes ",Object(n.b)("em",{parentName:"li"},"consensus public key")," (EdDSA public key that is used by others to authenticate consensus messages of this node) and ",Object(n.b)("em",{parentName:"li"},"networking information")," (network addresses and static Noise keys for establishing secure connections with this node from other nodes or from clients)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Validator Owner")," is a entity that manages an on-chain Libra account of the member of the Libra Association. The account stores the ",Object(n.b)("em",{parentName:"li"},"Validator Config")," resource."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Validator Set")," is a copy of Validator Configs of the approved subset of the Validator Owners, it consists of configs currently running the Libra Protocol. The Libra Association collectively decides which Validator Owners' configs are in the set. There is a one-to-one correspondence between the Validator Owners in the Validator Set and the Validator Nodes."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Validator Operator"),' ("operator") is an entity that manages its on-chain Libra account and runs a Validator Node on behalf of the Validator Owner who designated this operator to be running the node. There can be one Validator Operator account on-chain that runs two Validator Nodes for two Validator Owners, one node per one owner. It is not allowed to run a single Validator Node per multiple Validator Owners even when the nodes are run by the same Validator Operator. The Validator Operator has the permission to rotate the Validator Configs for its Validator Owners.')),Object(n.b)("p",null,"TODO: add more if needed"),Object(n.b)("h1",{id:"specification-of-global-on-chain-configs"},"Specification of global on-chain configs"),Object(n.b)("h2",{id:"validator-set"},"Validator Set"),Object(n.b)("p",null,'The following properties are being enforced "on-chain" via move contracts or "off-chain" via legal or contractual obligations:'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"(on-chain) Each Validator Owner holds a Libra account with a ",Object(n.b)("em",{parentName:"li"},"Validator Owner role")," (see ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/lip/blob/master/lips/lip-2.md"}),"lip-2: Libra Roles and Permissions"),")."),Object(n.b)("li",{parentName:"ul"},"(on-chain) A Validator Owner designates a single Validator Operator account to run a Validator Node."),Object(n.b)("li",{parentName:"ul"},"(on-chain) Validator Operator is a Libra account with a ",Object(n.b)("em",{parentName:"li"},"Validator Operator role"),"."),Object(n.b)("li",{parentName:"ul"},"(on-chain) Each Validator Operator may run nodes for multiple Validator Owners, therefore there is a one-to-many relationship between operator accounts and owner accounts."),Object(n.b)("li",{parentName:"ul"},"(off-chain) If an operator OP_1 is designated to run Validator Nodes for two Validator Owners V_1 and V_2, the operator must run two distinct instances of Validator Nodes."),Object(n.b)("li",{parentName:"ul"},"(off-chain) Each Validator Node interacts with other Validator Nodes through a consensus protocol. Each Validator Node also runs a Full Node, Full Node keeps track of sequenced transactions and the evolving state of the database, Full Node interacts with public clients by answering quieries."),Object(n.b)("li",{parentName:"ul"},"(on-chain) Each Validator Owner account stores a consensus configuration that consists of the consensus public key, the networking information (for the Validator Node to connect to other Validator Nodes) and the Full Node networking information (for the public Full Nodes and clients and, under certain circumstances, for other Validator Nodes themselves to connect to this Validator Node)."),Object(n.b)("li",{parentName:"ul"},"(off-chain) The Validator Operator designated by the Validator Owner is responsible for running a node with this consensus config and is responsible for updating/rotating this config as needed."),Object(n.b)("li",{parentName:"ul"},"(on-chain) The Validator Set is a map of Validator Owner addresses to a copy of their consensus configs, it reflects the configuration that ",Object(n.b)("em",{parentName:"li"},"currently")," runs consensus protocol. Each Validator Owner address appears in the Validator Set at most once."),Object(n.b)("li",{parentName:"ul"},"(on-chain) Only LibraRoot may add/remove Validators Owner accounts to/from the Validator Set. Each Validator Operator may also alter the Validator Set only in the following way: if the Validator Owner of this Validator Operator is in the Validator Set, the operator may update its Validator Owner's config in this set."),Object(n.b)("li",{parentName:"ul"},"(off-chain) Each Validator Owner is obliged to notify LN about the decision to change the Validator Operator, LN may disallow the switch if the new operator is deemed not trustworthy or the distribution of consensus power becomes skewed towards this operator or operators with similar architectures. LN makes sure there is enough diversity between the Validator Nodes operating the Libra Blockchain.")),Object(n.b)("h3",{id:"move-modules"},"Move Modules"),Object(n.b)("p",null,"Four move modules are involved in the validator configuration management"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/ValidatorConfig.move"}),Object(n.b)("inlineCode",{parentName:"a"},"ValidatorConfig")),": holds local consensus configuration for a Validator Node of a Validator Owner."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/ValidatorOperatorConfig.move"}),Object(n.b)("inlineCode",{parentName:"a"},"ValidatorOperatorConfig")),": holds the configuration of the validator operator (it only contains a human name)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/LibraSystem.move"}),Object(n.b)("inlineCode",{parentName:"a"},"LibraSystem")),": publishes the Validator Set as a global on-chain config and enforces the rules for modifying it."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/LibraConfig.move"}),Object(n.b)("inlineCode",{parentName:"a"},"LibraConfig")),": a generic module that manages all of the global on-chain configurations.")),Object(n.b)("h3",{id:"transaction-scripts"},"Transaction Scripts"),Object(n.b)("p",null,"The following transaction scripts can be run by the LibraRoot:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/create_validator_account.move"}),Object(n.b)("inlineCode",{parentName:"a"},"create_validator_account"))," - to create a Validator Owner account"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/create_validator_operator_account.move"}),Object(n.b)("inlineCode",{parentName:"a"},"create_validator_operator_account"))," - to create a Validator Operator account"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/add_validator_and_reconfigure.move"}),Object(n.b)("inlineCode",{parentName:"a"},"add_validator_and_reconfigure"))," - to add Validator Owner to the Validator Set with its current config and trigger reconfiguration"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/remove_validator_and_reconfigure.move"}),Object(n.b)("inlineCode",{parentName:"a"},"remove_validator_and_reconfigure"))," - to remove Validator Owner from the Validator Set and trigger reconfiguration")),Object(n.b)("p",null,"The following transaction scripts can be run by the Validator Owner:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/set_validator_operator.move"}),Object(n.b)("inlineCode",{parentName:"a"},"set_validator_operator"))," - to designate the Validator Operator"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/rotate_authentication_key.move"}),Object(n.b)("inlineCode",{parentName:"a"},"rotate_authentication_key"))," - to rotate the authentication key of the Validator Owner Account")),Object(n.b)("p",null,"The following transaction scripts can be run by the Validator Operator:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/register_validator_config.move"}),Object(n.b)("inlineCode",{parentName:"a"},"register_validator_config"))," - to register the Validator Config resource"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/set_validator_config_and_reconfigure.move"}),Object(n.b)("inlineCode",{parentName:"a"},"set_validator_config_and_reconfigure"))," - to change values of the Validator Config resource and update the config in the Validator Set (aborts if the Validator Owner is not in the Validator Set)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/transaction_scripts/rotate_authentication_key.move"}),Object(n.b)("inlineCode",{parentName:"a"},"rotate_authentication_key"))," - to rotate the authentication key of the Validator Operator Account")),Object(n.b)("h3",{id:"formal-verification-guarantees-on-the-move-implementation"},"Formal verification guarantees on the Move Implementation"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'The Move framework represents Validator Nodes and Validator Operators as addresses. I\'m not sure what terminology others use, but an address that has a published account resource could be called an "account".'),Object(n.b)("li",{parentName:"ul"},"Every account has a unique role (see roles and permissions)"),Object(n.b)("li",{parentName:"ul"},"Each Validator account has a Validator role."),Object(n.b)("li",{parentName:"ul"},"Each ValidatorOperator account has a ValidatorOperator role."),Object(n.b)("li",{parentName:"ul"},"Only LibraRoot or a Validator Operator of a Validator Owner which is currently in the Validator Set can trigger reconfiguration"),Object(n.b)("li",{parentName:"ul"},"Every change to a Validator Set triggers a reconfiguration when LibraConfig::NewEpochEvent is emitted"),Object(n.b)("li",{parentName:"ul"},"Only a Validator Owner (role) can set its Validator Operator; for each Validator Owner account this permission is given only to the Validator Owner (itself)"),Object(n.b)("li",{parentName:"ul"},"Only a Validator Operator of a Validator Owner who is present in the Validator Set can update a Validator Config in the Validator Set"),Object(n.b)("li",{parentName:"ul"},"The size of the Validator Set can only change by at most one in a block"),Object(n.b)("li",{parentName:"ul"},"Multiple calls to add_validator or remove_validator in the same block are prohibited except in genesis"),Object(n.b)("li",{parentName:"ul"},"Both functions register_validator_config or set_validator_config_and_reconfigure check the validity of the consensus key and abort if an invalid key is given"),Object(n.b)("li",{parentName:"ul"},"A Validator Owner account can only appear once in a Validator Set"),Object(n.b)("li",{parentName:"ul"},"(currently) If the Validator's Operator is not in the Validator Set, the Validator Owner itself acts as its own Validator Operator"),Object(n.b)("li",{parentName:"ul"},"If the Validator Owner changes the Validator Operator, its old Validator Config does not change in the Validator Set until a new Validator Operator sets a new Validator Config and explicit calls an update (LibraSystem::update_config_and_reconfigure) or the Association calls add/remove (LibraSystem::add_validator/LibraSystem::remove_validator)."),Object(n.b)("li",{parentName:"ul"},"Disciplined aborts")),Object(n.b)("h3",{id:"notes"},"Notes"),Object(n.b)("p",null,"In first version of Libra Protocol, Validator Owners will not maintain ownership of their Libra accounts, the LibraRoot account will run Validator Owners' operations on their behalf. Validator Operators on the other hand will maintain full ownership of their Libra accounts. Gradually, the Validator Owners will start managing their accounts themselves. A Validator Owner will send their new account key to the Association, the Association will rotate their account key to this new key and right after this rotation transaction gets executed, the Validator Owner starts to maintain its Libra account."),Object(n.b)("p",null,"Both the Validator Owner account and the Validator Operator account store a human_name which refers to the name of the company behind the account written in snake case (lowercase, where spaces are replaced with underscores), it is initialized at account creation and never changes. Most validator-related transaction scripts get the address and the name of the account and check that the human_name under the account matches the name passed into the transaction script. This prevents accounts from accidentally mixing up the addresses which are hex strings, and adds a second level of protection against human errors in mapping entities to Libra addresses."),Object(n.b)("h2",{id:"registered-currencies"},"Registered Currencies"),Object(n.b)("p",null,"TODO (@tzakian)"),Object(n.b)("h2",{id:"libra-version"},"Libra Version"),Object(n.b)("p",null,"TODO (@runtian-zhou)"),Object(n.b)("h2",{id:"libra-virtual-machine-configuration"},"Libra Virtual Machine Configuration"),Object(n.b)("p",null,"TODO (@runtian-zhou)"),Object(n.b)("h1",{id:"reconfiguration"},"Reconfiguration"),Object(n.b)("p",null,"Above we described four different global resources that define the configuration of a Libra Protocol on-chain.\nThese resources are governed by the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/libra/libra/blob/master/language/stdlib/modules/LibraConfig.move"}),Object(n.b)("inlineCode",{parentName:"a"},"LibraConfig"))," module and are stored under the ",Object(n.b)("inlineCode",{parentName:"p"},"0xA550C18")," address.\nAny changes to those configs define a new epoch by triggering a new epoch event (",Object(n.b)("inlineCode",{parentName:"p"},"LibraConfig::NewEpochEvent"),"). If a transaction causes an epoch change, that transaction is the last transaction committed in the current epoch \u2014 any subsequent transactions in that block or future blocks from that epoch will be ignored. Once the transaction has been committed, the new configuration starts being valid immediately. E.g. the new Validator Set will start running the consensus protocol in this new epoch."))}b.isMDXComponent=!0},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=b(a),u=o,p=d["".concat(i,".").concat(u)]||d[u]||h[u]||n;return a?r.a.createElement(p,l({ref:t},s,{components:a})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);