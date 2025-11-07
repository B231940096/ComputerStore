import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'

/**
 * ==============================
 * PROFILE EDIT ROUTE
 * ==============================
 * @see \App\Http\Controllers\Settings\ProfileController::edit
 * @route '/settings/profile'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
  url: edit.url(options),
  method: 'get',
})

edit.definition = {
  methods: ['get', 'head'],
  url: '/settings/profile',
} satisfies RouteDefinition<['get', 'head']>

edit.url = (options?: RouteQueryOptions) => edit.definition.url + queryParams(options)

edit.get = (options?: RouteQueryOptions) => ({ url: edit.url(options), method: 'get' })
edit.head = (options?: RouteQueryOptions) => ({ url: edit.url(options), method: 'head' })

const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
  action: edit.url(options),
  method: 'get',
})
editForm.get = (options?: RouteQueryOptions) => ({ action: edit.url(options), method: 'get' })
editForm.head = (options?: RouteQueryOptions) => ({
  action: edit.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'HEAD',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'get',
})

edit.form = editForm

/**
 * ==============================
 * PROFILE UPDATE ROUTE
 * ==============================
 * @see \App\Http\Controllers\Settings\ProfileController::update
 * @route '/settings/profile'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
  url: update.url(options),
  method: 'patch',
})

update.definition = {
  methods: ['patch'],
  url: '/settings/profile',
} satisfies RouteDefinition<['patch']>

update.url = (options?: RouteQueryOptions) => update.definition.url + queryParams(options)

update.patch = (options?: RouteQueryOptions) => ({ url: update.url(options), method: 'patch' })

const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
  action: update.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'PATCH',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
})

updateForm.patch = (options?: RouteQueryOptions) => ({
  action: update.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'PATCH',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
})

update.form = updateForm

/**
 * ==============================
 * PROFILE DESTROY ROUTE
 * ==============================
 * @see \App\Http\Controllers\Settings\ProfileController::destroy
 * @route '/settings/profile'
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
  url: destroy.url(options),
  method: 'delete',
})

destroy.definition = {
  methods: ['delete'],
  url: '/settings/profile',
} satisfies RouteDefinition<['delete']>

destroy.url = (options?: RouteQueryOptions) => destroy.definition.url + queryParams(options)

destroy.delete = (options?: RouteQueryOptions) => ({ url: destroy.url(options), method: 'delete' })

const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
  action: destroy.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'DELETE',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
})

destroyForm.delete = (options?: RouteQueryOptions) => ({
  action: destroy.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'DELETE',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
})

destroy.form = destroyForm

/**
 * ==============================
 * EXPORT ALL PROFILE ROUTES
 * ==============================
 */
const profile = {
  edit,
  update,
  destroy,
}

export default profile
