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
* @see \App\Http\Controllers\ProductController::dashboard
 * @see app/Http/Controllers/ProductController.php:12
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
* @see \App\Http\Controllers\ProductController::dashboard
 * @see app/Http/Controllers/ProductController.php:12
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::dashboard
 * @see app/Http/Controllers/ProductController.php:12
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::dashboard
 * @see app/Http/Controllers/ProductController.php:12
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::dashboard
 * @see app/Http/Controllers/ProductController.php:12
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::dashboard
 * @see app/Http/Controllers/ProductController.php:12
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::dashboard
 * @see app/Http/Controllers/ProductController.php:12
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
 * @see routes/web.php:13
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
 * @see routes/web.php:13
 * @route '/home'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:13
 * @route '/home'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:13
 * @route '/home'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:13
 * @route '/home'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:13
 * @route '/home'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:13
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
* @see \App\Http\Controllers\ProductController::computerparts
 * @see app/Http/Controllers/ProductController.php:68
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
* @see \App\Http\Controllers\ProductController::computerparts
 * @see app/Http/Controllers/ProductController.php:68
 * @route '/computerparts'
 */
computerparts.url = (options?: RouteQueryOptions) => {
    return computerparts.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::computerparts
 * @see app/Http/Controllers/ProductController.php:68
 * @route '/computerparts'
 */
computerparts.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: computerparts.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::computerparts
 * @see app/Http/Controllers/ProductController.php:68
 * @route '/computerparts'
 */
computerparts.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: computerparts.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::computerparts
 * @see app/Http/Controllers/ProductController.php:68
 * @route '/computerparts'
 */
    const computerpartsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: computerparts.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::computerparts
 * @see app/Http/Controllers/ProductController.php:68
 * @route '/computerparts'
 */
        computerpartsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: computerparts.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::computerparts
 * @see app/Http/Controllers/ProductController.php:68
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
* @see \App\Http\Controllers\ProductController::furniture
 * @see app/Http/Controllers/ProductController.php:121
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
* @see \App\Http\Controllers\ProductController::furniture
 * @see app/Http/Controllers/ProductController.php:121
 * @route '/furniture'
 */
furniture.url = (options?: RouteQueryOptions) => {
    return furniture.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::furniture
 * @see app/Http/Controllers/ProductController.php:121
 * @route '/furniture'
 */
furniture.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: furniture.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::furniture
 * @see app/Http/Controllers/ProductController.php:121
 * @route '/furniture'
 */
furniture.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: furniture.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::furniture
 * @see app/Http/Controllers/ProductController.php:121
 * @route '/furniture'
 */
    const furnitureForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: furniture.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::furniture
 * @see app/Http/Controllers/ProductController.php:121
 * @route '/furniture'
 */
        furnitureForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: furniture.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::furniture
 * @see app/Http/Controllers/ProductController.php:121
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
* @see \App\Http\Controllers\ProductController::preBuiltPc
 * @see app/Http/Controllers/ProductController.php:173
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
* @see \App\Http\Controllers\ProductController::preBuiltPc
 * @see app/Http/Controllers/ProductController.php:173
 * @route '/pre-built-pc'
 */
preBuiltPc.url = (options?: RouteQueryOptions) => {
    return preBuiltPc.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::preBuiltPc
 * @see app/Http/Controllers/ProductController.php:173
 * @route '/pre-built-pc'
 */
preBuiltPc.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preBuiltPc.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::preBuiltPc
 * @see app/Http/Controllers/ProductController.php:173
 * @route '/pre-built-pc'
 */
preBuiltPc.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: preBuiltPc.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::preBuiltPc
 * @see app/Http/Controllers/ProductController.php:173
 * @route '/pre-built-pc'
 */
    const preBuiltPcForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: preBuiltPc.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::preBuiltPc
 * @see app/Http/Controllers/ProductController.php:173
 * @route '/pre-built-pc'
 */
        preBuiltPcForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: preBuiltPc.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::preBuiltPc
 * @see app/Http/Controllers/ProductController.php:173
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
* @see \App\Http\Controllers\ProductController::peripherals
 * @see app/Http/Controllers/ProductController.php:85
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
* @see \App\Http\Controllers\ProductController::peripherals
 * @see app/Http/Controllers/ProductController.php:85
 * @route '/peripherals'
 */
peripherals.url = (options?: RouteQueryOptions) => {
    return peripherals.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::peripherals
 * @see app/Http/Controllers/ProductController.php:85
 * @route '/peripherals'
 */
peripherals.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: peripherals.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::peripherals
 * @see app/Http/Controllers/ProductController.php:85
 * @route '/peripherals'
 */
peripherals.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: peripherals.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::peripherals
 * @see app/Http/Controllers/ProductController.php:85
 * @route '/peripherals'
 */
    const peripheralsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: peripherals.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::peripherals
 * @see app/Http/Controllers/ProductController.php:85
 * @route '/peripherals'
 */
        peripheralsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: peripherals.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::peripherals
 * @see app/Http/Controllers/ProductController.php:85
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
/**
* @see \App\Http\Controllers\ProductController::console
 * @see app/Http/Controllers/ProductController.php:149
 * @route '/console'
 */
export const console = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: console.url(options),
    method: 'get',
})

console.definition = {
    methods: ["get","head"],
    url: '/console',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::console
 * @see app/Http/Controllers/ProductController.php:149
 * @route '/console'
 */
console.url = (options?: RouteQueryOptions) => {
    return console.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::console
 * @see app/Http/Controllers/ProductController.php:149
 * @route '/console'
 */
console.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: console.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::console
 * @see app/Http/Controllers/ProductController.php:149
 * @route '/console'
 */
console.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: console.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::console
 * @see app/Http/Controllers/ProductController.php:149
 * @route '/console'
 */
    const consoleForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: console.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::console
 * @see app/Http/Controllers/ProductController.php:149
 * @route '/console'
 */
        consoleForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: console.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::console
 * @see app/Http/Controllers/ProductController.php:149
 * @route '/console'
 */
        consoleForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: console.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    console.form = consoleForm
/**
* @see \App\Http\Controllers\ProductController::laptop
 * @see app/Http/Controllers/ProductController.php:53
 * @route '/laptop'
 */
export const laptop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: laptop.url(options),
    method: 'get',
})

laptop.definition = {
    methods: ["get","head"],
    url: '/laptop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::laptop
 * @see app/Http/Controllers/ProductController.php:53
 * @route '/laptop'
 */
laptop.url = (options?: RouteQueryOptions) => {
    return laptop.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::laptop
 * @see app/Http/Controllers/ProductController.php:53
 * @route '/laptop'
 */
laptop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: laptop.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::laptop
 * @see app/Http/Controllers/ProductController.php:53
 * @route '/laptop'
 */
laptop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: laptop.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::laptop
 * @see app/Http/Controllers/ProductController.php:53
 * @route '/laptop'
 */
    const laptopForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: laptop.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::laptop
 * @see app/Http/Controllers/ProductController.php:53
 * @route '/laptop'
 */
        laptopForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: laptop.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::laptop
 * @see app/Http/Controllers/ProductController.php:53
 * @route '/laptop'
 */
        laptopForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: laptop.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    laptop.form = laptopForm
/**
* @see \App\Http\Controllers\ProductController::phone
 * @see app/Http/Controllers/ProductController.php:105
 * @route '/phone'
 */
export const phone = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: phone.url(options),
    method: 'get',
})

phone.definition = {
    methods: ["get","head"],
    url: '/phone',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::phone
 * @see app/Http/Controllers/ProductController.php:105
 * @route '/phone'
 */
phone.url = (options?: RouteQueryOptions) => {
    return phone.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::phone
 * @see app/Http/Controllers/ProductController.php:105
 * @route '/phone'
 */
phone.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: phone.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::phone
 * @see app/Http/Controllers/ProductController.php:105
 * @route '/phone'
 */
phone.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: phone.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::phone
 * @see app/Http/Controllers/ProductController.php:105
 * @route '/phone'
 */
    const phoneForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: phone.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::phone
 * @see app/Http/Controllers/ProductController.php:105
 * @route '/phone'
 */
        phoneForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: phone.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::phone
 * @see app/Http/Controllers/ProductController.php:105
 * @route '/phone'
 */
        phoneForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: phone.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    phone.form = phoneForm
/**
* @see \App\Http\Controllers\ProductController::networkdevice
 * @see app/Http/Controllers/ProductController.php:135
 * @route '/networkdevice'
 */
export const networkdevice = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: networkdevice.url(options),
    method: 'get',
})

networkdevice.definition = {
    methods: ["get","head"],
    url: '/networkdevice',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::networkdevice
 * @see app/Http/Controllers/ProductController.php:135
 * @route '/networkdevice'
 */
networkdevice.url = (options?: RouteQueryOptions) => {
    return networkdevice.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::networkdevice
 * @see app/Http/Controllers/ProductController.php:135
 * @route '/networkdevice'
 */
networkdevice.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: networkdevice.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::networkdevice
 * @see app/Http/Controllers/ProductController.php:135
 * @route '/networkdevice'
 */
networkdevice.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: networkdevice.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::networkdevice
 * @see app/Http/Controllers/ProductController.php:135
 * @route '/networkdevice'
 */
    const networkdeviceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: networkdevice.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::networkdevice
 * @see app/Http/Controllers/ProductController.php:135
 * @route '/networkdevice'
 */
        networkdeviceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: networkdevice.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::networkdevice
 * @see app/Http/Controllers/ProductController.php:135
 * @route '/networkdevice'
 */
        networkdeviceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: networkdevice.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    networkdevice.form = networkdeviceForm
/**
* @see \App\Http\Controllers\ProductController::figure
 * @see app/Http/Controllers/ProductController.php:163
 * @route '/figure'
 */
export const figure = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: figure.url(options),
    method: 'get',
})

figure.definition = {
    methods: ["get","head"],
    url: '/figure',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProductController::figure
 * @see app/Http/Controllers/ProductController.php:163
 * @route '/figure'
 */
figure.url = (options?: RouteQueryOptions) => {
    return figure.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProductController::figure
 * @see app/Http/Controllers/ProductController.php:163
 * @route '/figure'
 */
figure.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: figure.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProductController::figure
 * @see app/Http/Controllers/ProductController.php:163
 * @route '/figure'
 */
figure.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: figure.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProductController::figure
 * @see app/Http/Controllers/ProductController.php:163
 * @route '/figure'
 */
    const figureForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: figure.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProductController::figure
 * @see app/Http/Controllers/ProductController.php:163
 * @route '/figure'
 */
        figureForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: figure.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProductController::figure
 * @see app/Http/Controllers/ProductController.php:163
 * @route '/figure'
 */
        figureForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: figure.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    figure.form = figureForm
/**
 * @see routes/web.php:27
 * @route '/basket'
 */
export const basket = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: basket.url(options),
    method: 'get',
})

basket.definition = {
    methods: ["get","head"],
    url: '/basket',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:27
 * @route '/basket'
 */
basket.url = (options?: RouteQueryOptions) => {
    return basket.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:27
 * @route '/basket'
 */
basket.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: basket.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:27
 * @route '/basket'
 */
basket.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: basket.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:27
 * @route '/basket'
 */
    const basketForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: basket.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:27
 * @route '/basket'
 */
        basketForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: basket.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:27
 * @route '/basket'
 */
        basketForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: basket.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    basket.form = basketForm