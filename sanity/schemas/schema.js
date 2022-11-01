import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import pageInfo from './pageInfo'
import experiance from './experiance'
import project from './project'
import skill from './skill'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    experiance,
    project,
    skill,
    social
  ]),
})
