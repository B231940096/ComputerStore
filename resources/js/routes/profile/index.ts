import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'

/**
 * @see routes/web.php:21
 * @route '/profile'
 */
export const profileEdit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
  url: profileEdit.url(options),
  method: 'get',
});

profileEdit.definition = {
  methods: ['get', 'head'],
  url: '/profile',
} satisfies RouteDefinition<['get', 'head']>;

profileEdit.url = (options?: RouteQueryOptions) => {
  return profileEdit.definition.url + queryParams(options);
};

profileEdit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
  url: profileEdit.url(options),
  method: 'get',
});

profileEdit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
  url: profileEdit.url(options),
  method: 'head',
});

const profileEditForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
  action: profileEdit.url(options),
  method: 'get',
});

profileEditForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
  action: profileEdit.url(options),
  method: 'get',
});

profileEditForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
  action: profileEdit.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'HEAD',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'get',
});

profileEdit.form = profileEditForm;

/**
 * @see \App\Http\Controllers\Settings\ProfileController::edit
 * @route '/settings/profile'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
  url: edit.url(options),
  method: 'get',
});

edit.definition = {
  methods: ['get', 'head'],
  url: '/settings/profile',
} satisfies RouteDefinition<['get', 'head']>;

edit.url = (options?: RouteQueryOptions) => {
  return edit.definition.url + queryParams(options);
};

edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
  url: edit.url(options),
  method: 'get',
});

edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
  url: edit.url(options),
  method: 'head',
});

const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
  action: edit.url(options),
  method: 'get',
});

editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
  action: edit.url(options),
  method: 'get',
});

editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
  action: edit.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'HEAD',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'get',
});

edit.form = editForm;

/**
 * Update
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
  url: update.url(options),
  method: 'patch',
});

update.definition = {
  methods: ['patch'],
  url: '/settings/profile',
} satisfies RouteDefinition<['patch']>;

update.url = (options?: RouteQueryOptions) => {
  return update.definition.url + queryParams(options);
};

update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
  url: update.url(options),
  method: 'patch',
});

const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
  action: update.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'PATCH',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
});

updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
  action: update.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'PATCH',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
});

update.form = updateForm;

/**
 * Destroy
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
  url: destroy.url(options),
  method: 'delete',
});

destroy.definition = {
  methods: ['delete'],
  url: '/settings/profile',
} satisfies RouteDefinition<['delete']>;

destroy.url = (options?: RouteQueryOptions) => {
  return destroy.definition.url + queryParams(options);
};

destroy.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
  url: destroy.url(options),
  method: 'delete',
});

const destroyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
  action: destroy.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'DELETE',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
});

destroyForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
  action: destroy.url({
    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
      _method: 'DELETE',
      ...(options?.query ?? options?.mergeQuery ?? {}),
    },
  }),
  method: 'post',
});

destroy.form = destroyForm;

const profile = {
  profileEdit: Object.assign(profileEdit, profileEdit),
  edit: Object.assign(edit, edit),
  update: Object.assign(update, update),
  destroy: Object.assign(destroy, destroy),
};

export default profile;
