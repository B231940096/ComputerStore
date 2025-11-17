import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::login
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:47
 * @route '/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
 * @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
 * @route '/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
 * @see routes/web.php:12
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:12
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:12
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:12
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:12
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:12
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:12
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
 * @see routes/web.php:15
 * @route '/home'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/home',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:15
 * @route '/home'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:15
 * @route '/home'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:15
 * @route '/home'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:15
 * @route '/home'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:15
 * @route '/home'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:15
 * @route '/home'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
 * @see routes/web.php:18
 * @route '/computerparts'
 */
export const computerparts = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: computerparts.url(options),
    method: 'get',
})

computerparts.definition = {
    methods: ["get","head"],
    url: '/computerparts',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:18
 * @route '/computerparts'
 */
computerparts.url = (options?: RouteQueryOptions) => {
    return computerparts.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:18
 * @route '/computerparts'
 */
computerparts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: computerparts.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:18
 * @route '/computerparts'
 */
computerparts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: computerparts.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:18
 * @route '/computerparts'
 */
    const computerpartsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: computerparts.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:18
 * @route '/computerparts'
 */
        computerpartsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: computerparts.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:18
 * @route '/computerparts'
 */
        computerpartsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: computerparts.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    computerparts.form = computerpartsForm
/**
 * @see routes/web.php:21
 * @route '/furniture'
 */
export const furniture = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: furniture.url(options),
    method: 'get',
})

furniture.definition = {
    methods: ["get","head"],
    url: '/furniture',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:21
 * @route '/furniture'
 */
furniture.url = (options?: RouteQueryOptions) => {
    return furniture.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:21
 * @route '/furniture'
 */
furniture.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: furniture.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:21
 * @route '/furniture'
 */
furniture.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: furniture.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:21
 * @route '/furniture'
 */
    const furnitureForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: furniture.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:21
 * @route '/furniture'
 */
        furnitureForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: furniture.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:21
 * @route '/furniture'
 */
        furnitureForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: furniture.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    furniture.form = furnitureForm
/**
 * @see routes/web.php:27
 * @route '/pre-built-pc'
 */
export const preBuiltPc = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preBuiltPc.url(options),
    method: 'get',
})

preBuiltPc.definition = {
    methods: ["get","head"],
    url: '/pre-built-pc',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:27
 * @route '/pre-built-pc'
 */
preBuiltPc.url = (options?: RouteQueryOptions) => {
    return preBuiltPc.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:27
 * @route '/pre-built-pc'
 */
preBuiltPc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preBuiltPc.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:27
 * @route '/pre-built-pc'
 */
preBuiltPc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: preBuiltPc.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:27
 * @route '/pre-built-pc'
 */
    const preBuiltPcForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: preBuiltPc.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:27
 * @route '/pre-built-pc'
 */
        preBuiltPcForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: preBuiltPc.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:27
 * @route '/pre-built-pc'
 */
        preBuiltPcForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: preBuiltPc.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    preBuiltPc.form = preBuiltPcForm
/**
 * @see routes/web.php:30
 * @route '/peripherals'
 */
export const peripherals = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: peripherals.url(options),
    method: 'get',
})

peripherals.definition = {
    methods: ["get","head"],
    url: '/peripherals',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:30
 * @route '/peripherals'
 */
peripherals.url = (options?: RouteQueryOptions) => {
    return peripherals.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:30
 * @route '/peripherals'
 */
peripherals.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: peripherals.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:30
 * @route '/peripherals'
 */
peripherals.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: peripherals.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:30
 * @route '/peripherals'
 */
    const peripheralsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: peripherals.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:30
 * @route '/peripherals'
 */
        peripheralsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: peripherals.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:30
 * @route '/peripherals'
 */
        peripheralsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: peripherals.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    peripherals.form = peripheralsForm